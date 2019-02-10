/**
 * User UI View
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import ErrorBoundary from 'react-error-boundary';

import { AppView, Button } from './src/components/'
// import QuickPicker from "quick-picker";
// import NavigationService from "./src/services/navigationService";
// import { timeout } from "./src/services/helpers";

// import authService from "./src/services/authService";
// import { tracker } from "./src/services/googleAnalytics";


export default class App extends Component {
  async componentDidMount() {}

  render() {
    return (
      <ErrorBoundary>
        <AppView>
          test
          <Button />
        </AppView>
      </ErrorBoundary>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   }
// });
