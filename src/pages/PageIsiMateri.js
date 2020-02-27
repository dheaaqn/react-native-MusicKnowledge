import React, {Component} from 'react';
import IsiMateri from '../api/IsiMateri';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {withNavigation} from 'react-navigation';

class PageIsiMateri extends React.Component {

    render() {
    return (
      <IsiMateri />
    );
  }
}
 export default withNavigation(PageIsiMateri);