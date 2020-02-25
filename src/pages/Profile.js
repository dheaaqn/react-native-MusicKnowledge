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
      <View style={{backgroundColor: '#F49423', height: 90}}>
        <View style={{top: 30, left: 30,flexDirection:'row', flexWrap:'wrap'}}>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Image source={require('../icons/menu.png')} />
          </Button>
          <Text style={{marginTop:10,marginLeft:'25%',fontSize:18,color:'#fff',fontWeight:"bold"}}>
          Edit Profile
          </Text>
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
});
