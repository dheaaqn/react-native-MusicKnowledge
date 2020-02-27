import React, {Component} from 'react';
import IsiQuiz from '../api/IsiQuiz';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {withNavigation} from 'react-navigation';

class PageIsiQuiz extends React.Component {

    render() {
    return (
      <IsiQuiz />
    );
  }
}
 export default withNavigation(PageIsiQuiz);