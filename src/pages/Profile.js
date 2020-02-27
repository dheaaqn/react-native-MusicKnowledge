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

import LinearGradient from 'react-native-linear-gradient';

import { Container, Button } from 'native-base';

export default class Profile extends Component{
    render() {
    return (
      <Container>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFB75E', '#ED8F03']} style={{height:90}}>
        <View style={{top: 30, left: 30,flexDirection:'row', flexWrap:'wrap'}}>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Image source={require('../icons/menu.png')} />
          </Button>
          <Text style={{marginTop:10,marginLeft:'30%',position:'absolute',fontSize:18,color:'#fff',fontFamily: 'Nunito'}}>
          Edit Profile
          </Text>
        </View>
      </LinearGradient>

      <EditProfile />

      </Container>

    );
  }
}
