import React, {Component} from 'react';

import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

Image 
} from 'react-native';

import EditProfile from '../api/EditProfile';

import AsyncStorage from '@react-native-community/async-storage';

import { Container, Button } from 'native-base';

export default class Profile extends Component{
    render() {
    return (
      <Container>
      <View style={{backgroundColor: '#F49423', height: 200}}>
        <View style={{top: 30, left: 30}}>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Image source={require('../icons/menu.png')} />
          </Button>
        </View>
      </View>

      <EditProfile />

      </Container>

    );
  }
}

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
