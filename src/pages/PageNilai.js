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

const styles = StyleSheet.create({

container : {

flexGrow: 1,

justifyContent:'center',

alignItems: 'center'

},



inputBox: {

width:300,

backgroundColor:'#F7F7F7',

borderRadius: 4,

paddingHorizontal:16,

fontSize:15,

lineHeight:19,

color:'#000000',

marginVertical: 10

},

button: {

width:200,

backgroundColor:'#f8a33b',

borderRadius: 4,

marginVertical: 10,

paddingVertical: 13,

},

buttonText: {

fontSize: 14,

lineHeight: 19,

color:'#ffffff',

textAlign:'center'

}



});
