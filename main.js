/** @format */

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {name as appName} from './app.json';


const renderRoutes = () => {
    console.log('renderRoutes')
  return render(
    <App />,
    document.getElementById('app-root')
  )
}

const startApplication = () => {
  console.log('startApplication')
  return render(
    <App />,
    document.getElementById('app-root')
  )
}

startApplication()

