const jQuery = require('jquery')

const EmptyFunction = () => {}
const HTTP_GET      = 'GET'
const HTTP_POST     = 'POST'
const HTTP_PUT      = 'PUT'
const HTTP_DELETE   = 'DELETE'

export default class RestAdapter {
  constructor(options = {}) {
    // copy attributes from options to the user
    for (let attr in options) {
      this[attr] = options[attr]
    }
    // ensure these methods are present
    this.beforeSend   = options.beforeSend || EmptyFunction
    this.beforeReject = options.beforeReject || EmptyFunction
  }

  request(url, type, options) {
    return new Promise((resolve, reject) => {
      let hash = this.requestOptions(url, type, options)

      // set the beforeSend method to allow for
      // request mutation such as auth token header injection
      hash.beforeSend = (request) => this.beforeSend(request)
      hash.success = (response) => resolve(response)
      hash.error = (jqXHR, textStatus, errorThrown) => {
        this.beforeReject(jqXHR, textStatus, errorThrown)
        return reject(jqXHR, textStatus, errorThrown)
      }

      return jQuery.ajax(hash)
    })
  }

  requestOptions(url, type, options = {}) {
    let hash = Object.assign({
      url: url,
      type: type,
      context: this,
      xhrFields: { withCredentials: true },
    }, options)

    // stringify the data as JSON for non-GET requests
    // jQuery will handle translating a data object
    // to a query string in the case of a GET request
    if (hash.data && type !== HTTP_GET) {
      if (hash.data instanceof FormData) {
        hash.contentType = false
        hash.processData = false
      } else {
        hash.contentType = 'application/json; charset=utf-8'
        hash.data = JSON.stringify(hash.data)
        hash.dataType = 'json'
      }
    }

    return hash
  }

  urlPrefix(path, parentURL) {
    let host = this.host
    let namespace = this.namespace
    let url = []

    if (path) {
      // Absolute path
      if (path.charAt(0) === '/') {
        if (host) {
          path = path.slice(1)
          url.push(host)
        }
      // Relative path
      } else if (!/^http(s)?:\/\//.test(path)) {
        url.push(parentURL)
      }
    } else {
      if (host)      { url.push(host)      }
      if (namespace) { url.push(namespace) }
    }

    if (path) {
      url.push(path)
    }

    return url.join('/')
  }

  buildURL(type, id, query) {
    let parts  = []
    let host   = this.host
    let prefix = this.urlPrefix()

    if ( type && type[0] === '/' ) { type = type.substring(1) }
    if ( type ) { parts.push(type) }
    if ( id && !Array.isArray(id) ) { parts.push(encodeURIComponent(id)) }
    if ( prefix ) { parts.unshift(prefix) }

    let url = parts.join('/')

    if ( !host && url ) {
      url = '/' + url
    }

    if ( jQuery.isPlainObject(query) ) {
      url = url + '?' + jQuery.param(query)
    }

    return url
  }

  findOne(typeKey, id, options) {
    return this.request(
      this.buildURL(typeKey, id),
      HTTP_GET,
      options
    )
  }

  findAll(typeKey, options) {
    return this.request(
      this.buildURL(typeKey),
      HTTP_GET,
      options
    )
  }

  findQuery(typeKey, query, options) {
    return this.request(
      this.buildURL(typeKey),
      HTTP_GET,
      Object.assign({ data: query }, options)
    )
  }

  create(typeKey, body, options) {
    return this.request(
      this.buildURL(typeKey, null),
      HTTP_POST,
      Object.assign({ data: body }, options)
    )
  }

  update(typeKey, id, body, options) {
    return this.request(
      this.buildURL(typeKey, id),
      HTTP_PUT,
      Object.assign({ data: body }, options)
    )
  }

  destroy(typeKey, id, options) {
    return this.request(
      this.buildURL(typeKey, id),
      HTTP_DELETE,
      options
    )
  }
}

