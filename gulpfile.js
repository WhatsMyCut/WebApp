var gulp = require('gulp')
var webpackConfig = require('./webpack.config')

// gulp-cachebust helps create `build/styles/main.css` with a hash.
var CacheBuster = require('gulp-cachebust')
var cachebust = new CacheBuster()

// Other modules are required inline as necessary to prevent
// time spent loading code that may not be run

var isProduction = process.env.NODE_ENV === 'production'
var inputStylesGlob = './src/**/*.scss'
var inputImagesGlob = './src/assets/images/**'
var inputFontsGlob = './src/assets/fonts/**'

var monkeyPatchChokidarToIgnoreNodeModules = () => {
  var chokidar = require('chokidar')
  chokidar._watch = chokidar.watch
  chokidar.watch = (directoryPath, options) => {
    options.ignored = /node_modules/
    return chokidar._watch(directoryPath, options)
  }
}

// use specific 'with-clean' tasks that depend on cleaning
// to ensure clean:build is run before all other tasks
gulp.task('build', [
  'clean:build',
  'webpack-with-clean',
  'copy-fonts-with-clean',
  'copy-images-with-clean',
  'format-and-lint-styles-with-clean',
  'compile-styles-with-clean',
  'make-build-html'
])

// format and lint source file and then compile from scss to css
// then start a development server that will compile and watch
// for JavaScript changes, then start a watcher for style changes
gulp.task('build:watch', [
  'copy-fonts-with-clean',
  'copy-images-with-clean',
  'format-and-lint-styles-with-clean',
  'compile-styles-with-clean'
], function(callback) {
  var webpack = require('webpack')
  var WebpackDevServer = require('webpack-dev-server')
  // Start a webpack-dev-server
  var config = Object.assign({}, webpackConfig, {
    devtool: 'eval',
    watch: true
  })
  var compiler = webpack(config)

  // webpack/watchpack/chokidar normally watches the node_modules directory
  // it's not very useful for us and eats a lot of CPU when running inside
  // Vagrant with mounted/shared folders where inotify isn't useful
  // this call monkey patches the calls to chokidar.watch to ignore the
  // node_modules directory and lowers CPU usage from ~55% to ~10%
  monkeyPatchChokidarToIgnoreNodeModules()

  new WebpackDevServer(compiler, {
    // This polling interval is necessary for file watching on linux
    // webpack usually depends on chokidar/inotify on OSX for fs events
    // inotify doesn't exist on linux. The poll interval is somewhat higher than one would like
    // to prevent CPU spiking in VirtualBox. A 1s poll causing VirtualBox to eat up a lot of CPU.
    watchOptions: { poll: 1500 },
    contentBase: config.output.path
  }).listen(8080, '0.0.0.0', function(err) {
    if (err) { callback(err) }
    console.log('[webpack-dev-server]', 'http://localhost:8080')
  })

  gulp.watch(inputFontsGlob, { interval: 1000 }, ['copy-fonts'])
  gulp.watch(inputImagesGlob, { interval: 1000 }, ['copy-images'])
  gulp.watch(inputStylesGlob, { interval: 1000 }, ['compile-styles'])
})

// clean the build directory
gulp.task('clean:build', function(callback) {
  var del = require('del')
  return del('build')
})

function webpackTask(callback) {
  var webpack = require('webpack')
  webpack(webpackConfig, function(err, stats) {
    callback(err)
  })
}

// one time compile
gulp.task('webpack', webpackTask)
// this task will be used with normal building but not watching
gulp.task('webpack-with-clean', ['clean:build'], webpackTask)

function copyFontsTask() {
  gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**').pipe(gulp.dest('./build/fonts'))
  return gulp.src(inputFontsGlob).pipe(gulp.dest('./build/fonts'))
}
gulp.task('copy-fonts', copyFontsTask);
gulp.task('copy-fonts-with-clean', ['clean:build'], copyFontsTask);

function copyImagesTask() {
  return gulp.src(inputImagesGlob).pipe(gulp.dest('./build/images'))
}

gulp.task('copy-images', copyImagesTask);
// this task will be used with normal building but not watching
gulp.task('copy-images-with-clean', ['clean:build'], copyImagesTask);


function compileStylesTask() {
  var autoprefixer = require('autoprefixer')
  var sass = require('gulp-sass')
  var sourcemaps = require('gulp-sourcemaps')
  var postcss = require('gulp-postcss')

  var outputDir = './src/dist'
  var sourcemapDir = './src/dist/sourcemaps'
  var sassOpts = {
    includePaths: ['./node_modules/normalize.css'],
    outputStyle: isProduction ? 'compressed' : 'nested'
  }
  var addVendorPrefixes = postcss([
    autoprefixer({ browsers: ['last 2 versions'] })
  ])

  var p =
    gulp.src(inputStylesGlob)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(addVendorPrefixes)
    .pipe(sourcemaps.write(sourcemapDir))

  if (isProduction) {
    console.log('running css cache buster...')
    p = p.pipe(cachebust.resources())
  }

  return p.pipe(gulp.dest(outputDir))
}

// compile scss styles to css styles then use
// postcss/autoprefixer to add the appropriate
// vendor prefixes for supported browsers
gulp.task('compile-styles', compileStylesTask)
// this task will be used with normal building but not watching
gulp.task('compile-styles-with-clean', ['clean:build'], compileStylesTask)

function formatAndLintStylesTask() {
  var stylelint = require('stylelint')
  var stylefmt = require('stylefmt')
  var postcss = require('gulp-postcss')
  var scss = require('postcss-scss')
  var reporter = require('postcss-reporter')

  var outputDir = './src/dist'
  var plugins = [
    stylefmt(),
    stylelint({ config: require('./stylelint.config') }),
    reporter({ throwError: true })
  ]
  var formatAndLint = postcss(plugins, { syntax: scss })

  return gulp.src(inputStylesGlob)
    .pipe(formatAndLint)
    .pipe(gulp.dest(outputDir))
}

// format and lint scss source files
gulp.task('format-and-lint-styles', formatAndLintStylesTask)
gulp.task('format-and-lint-styles-with-clean', ['clean:build'], formatAndLintStylesTask)

gulp.task('make-build-html', ['webpack-with-clean', 'format-and-lint-styles'], function() {
  if (isProduction === false) {
    return null
  }
  console.log('updating build/index.html for cache busting...')
  return gulp.src('./index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('./build/index.html'))
})
