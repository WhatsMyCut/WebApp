/** @format */

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {name as appName} from './app.json';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import createApplicationStore from './src/store/createApplicationStore'
import createRestAdapter from './src/api/createRestAdapter'
import ErrorBoundary from 'react-error-boundary';

import Actions from './src/Actions/Actions'

const store = createApplicationStore()

const getRoutes = () => {
  console.log('getRoutes', store)
  return (
    <Route path='/' component={ App } />
  )
}

const renderRoutes = () => {
    const routes = getRoutes()
    console.log('renderRoutes', store, routes)
    return render(
        <Provider store={store}>
          <ErrorBoundary>
          <Router>
            <div id="router-outlet">
              { routes }
            </div>
          </Router>
          </ErrorBoundary>
        </Provider>,
        document.getElementById('app-root')
    )
}

const fetchConfiguration = () => {
  return Promise.resolve(require('./src/config/config.json'))
}


// const renderRoutes = () => {
//     console.log('renderRoutes')
//   return render(
//     <App />,
//     document.getElementById('app-root')
//   )
// }

const startApplication = () => {
    fetchConfiguration().then(config => {
        console.log('startApplication', config, adapter)
        const adapter = createRestAdapter({ host: config.host })
        renderRoutes()
//     // create an adapter for making API calls
//     //const user = createUser(adapter)
//     store.dispatch(Actions.fetchInitialAppData())
//       .then(renderRoutes)
//       .catch(() => {
//         renderRoutes()
//     })
})
}

startApplication()

