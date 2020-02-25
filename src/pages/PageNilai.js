import React, {Component} from 'react';
import Nilai from '../api/Nilai';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {withNavigation} from 'react-navigation';

class PageNilai extends React.Component {

    render() {
    return (
      <Nilai />
    );
  }
}
 export default withNavigation(PageNilai);