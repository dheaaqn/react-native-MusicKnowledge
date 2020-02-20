import React, {Component} from 'react';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

FlatList,

Image,

ImageBackground

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import RNRestart from 'react-native-restart';

import {withNavigation} from 'react-navigation';

import {ListItem } from 'react-native-elements'

import { Card, Content, Badge, CardItem, Body, Right, Left} from 'native-base';

import axios from 'axios';

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        password: '',
        id: 0,
    };
  }
UNSAFE_componentWillMount() {
      this.getData();
  }
    getData = async () => {
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const name = String(parsed.name);
      const email = String(parsed.email);
      const password = String(parsed.password);
      const id = parsed.id;
      this.setState({name: name,email:email,id:id,password:password});
      }
edit=()=> {
    const id_user = this.state.id;
    const names = this.state.name;
    const passwords = this.state.password;
    axios.put(`http://3.82.209.169/api/updateuser/${id_user}?name=${names}&password=${passwords}`)
      .then(res => {
              if (res.data==1) {
        AsyncStorage.clear();
        let obj ={
          name: this.state.name,
          email: this.state.email,
          id: this.state.id,
          password: this.state.password,
          IsLogin : true
        }
        AsyncStorage.setItem('data',JSON.stringify(obj));          
        RNRestart.Restart();
        } else {alert("Edit Failed!");}
})    }

  render() {
    return (
        <View style={styles.container} >
          <Text style={styles.hiName}>Hi {this.state.email}!</Text>
<TextInput style={styles.inputBox}


placeholder="Name"

keyboardType="default"

onChangeText={(name) => this.setState({name})}

value={this.state.name}
/>

<TextInput style={styles.inputBox}

placeholder="Password"

secureTextEntry={true}

onChangeText={(password) => this.setState({password})}

value={this.state.password}
/>

<TouchableOpacity style={styles.button} onPress={this.edit}>

<Text style={styles.buttonText}>Edit</Text>

</TouchableOpacity>
       </View>
    );
  }
}
 export default withNavigation(EditProfile);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
   cardContainer: {
        borderRadius: 8,
        height: 186,
        marginBottom: 15,
        marginTop: 15,
    },
    textTitle: {
        top: 25,
        left: 25,
    }
});