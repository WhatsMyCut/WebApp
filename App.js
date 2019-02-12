/**
 * User UI View
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { AppView } from './src/views/'
import { Button } from './src/components/'
import './src/assets/styles/_main.scss'
import { hot } from 'react-hot-loader/root'

// import QuickPicker from "quick-picker";
// import NavigationService from "./src/services/navigationService";
// import { timeout } from "./src/services/helpers";

// import authService from "./src/services/authService";
// import { tracker } from "./src/services/googleAnalytics";


class App extends Component {
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
export default hot(App)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   }
// });
