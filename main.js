/** @format */

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {name as appName} from './app.json';

import { useRouterHistory, Router } from 'react-router'
import { createHashHistory, useBeforeUnload } from 'history'
import { Provider } from 'react-redux'
import createApplicationStore from 'src/store/createApplicationStore'
import Actions from 'src/Actions/Actions'

const appHistory = useBeforeUnload(useRouterHistory(createHashHistory))({ queryKey: false })

const store = createApplicationStore()

const getRoutes = (store) => {
  return {
    childRoutes: [{
      path: '/',
      component: App,
      childRoutes: [
        // require('routes/styleguide')(store),
        // require('routes/authenticated')(store),
        // require('routes/login')(store)
      ]
    }]
  }
}

const renderRoutes = () => {
  return render(
    <Provider store={store}>
      <Router history={appHistory} routes={getRoutes(store)} />
    </Provider>,
    document.getElementById('app-root')
  )
}

const fetchConfiguration = () => {
  return Promise.resolve(require('config/config.json'))
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
    console.log('startApplication', config)
    // create an adapter for making API calls
    const adapter = createRestAdapter({ host: config.host })
    //const user = createUser(adapter)
    store.dispatch(Actions.fetchInitialAppData())
      .then(renderRoutes)
      .catch(() => {
        renderRoutes()
      })
  })
}

startApplication()

