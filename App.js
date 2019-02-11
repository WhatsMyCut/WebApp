/**
 * User UI View
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

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
        <AppView>
          test
          <Button />
        </AppView>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   }
// });
