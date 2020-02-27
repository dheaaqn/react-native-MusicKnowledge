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
         <View style={styles.head}>
         <Image source={require('../images/email.png')} style={styles.gambar}/>
        <View style={{marginTop:10}}>
        <Text style={styles.hasil}>Email</Text>
         <Text style={styles.hasil}>{this.state.email}</Text>
         </View>
         </View>
         <View style={styles.head}>
         <Image source={require('../images/name.png')} style={styles.gambar}/>
        <View style={{marginTop:10}}>
        <Text style={styles.hasil}>Name</Text>
        <TextInput style={styles.inputBox}

        placeholder="Name"

        style={styles.hasil}

        keyboardType="default"

        onChangeText={(name) => this.setState({name})}

        value={this.state.name}
        />
         </View>
         </View>
         <View style={styles.head}>
         <Image source={require('../images/pass.png')} style={styles.gambar}/>
        <View style={{marginTop:10}}>
        <Text style={styles.hasil}>Password</Text>
        <TextInput style={styles.inputBox}

        placeholder="Password"

        secureTextEntry={true}

        style={styles.hasil}

        onChangeText={(password) => this.setState({password})}

        value={this.state.password}
        />
         </View>
         </View>
<TouchableOpacity onPress={this.edit}>

<Text style={styles.button}>Edit</Text>

</TouchableOpacity>
       </View>
    );
  }
}
 export default withNavigation(EditProfile);

const styles = StyleSheet.create({
  head:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    borderColor: '#b2b2b2',
    paddingBottom:30,
    borderBottomWidth: 1,
    width:'90%'
  },
  container: {
    marginTop: 20,
    flex: 1,
    marginLeft: '10%',
  },
  gambar:{
    marginRight:15,
    width: 60,
    height:60,
  },
hasil:{
    fontFamily: 'Nunito'
},
button: {
    width:'90%',
    color:'#fff',
    textAlign: "center",
    backgroundColor:'#F8A23B',
    fontSize:15,
    padding:15,
    borderRadius:7,
    marginTop: 70,
    shadowColor: "#000",
    fontFamily: 'Nunito'
 },
});