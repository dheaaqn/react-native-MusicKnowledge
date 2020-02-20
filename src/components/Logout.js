import React, {Component} from 'react';

import {withNavigation} from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';

import RNRestart from 'react-native-restart';

class Logout extends React.Component {
  render() {
      AsyncStorage.clear();
        RNRestart.Restart();
    return false;
  }
}
 export default withNavigation(Logout);