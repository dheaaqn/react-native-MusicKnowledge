import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {withNavigation} from 'react-navigation';

import axios from 'axios';

import RNRestart from 'react-native-restart';

class FormRegister extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    name: '',
    email: '',
    password: '',
  }
  this.signup = this.signup.bind(this);
}

signup(event) {
    const user = this.state;
    axios.post(`http://3.82.209.169/api/register`,  user )
      .then(res => {
              if (res.data.data) {
          let data = {
          name : res.data.data.name,
          id : res.data.data.id,
          email : res.data.data.email,           
          password: this.state.password,
          IsLogin : true
          }
          AsyncStorage.setItem('data', JSON.stringify(data));
        RNRestart.Restart();
        } else {alert("Register Failed!");}
}).catch(function (error) {
    if (error.response) {
     alert("Email Already Used");
    }
  });    }



render(){

return(

<View style={styles.container}>

<TextInput style={styles.inputBox}

placeholder="Username"

keyboardType="default"

onChangeText={name => this.setState({name})}

onSubmitEditing={()=> this.password.focus()}

/>

<TextInput style={styles.inputBox}

placeholder="Email"

keyboardType="email-address"

onSubmitEditing={()=> this.password.focus()}

onChangeText={email => this.setState({email})}
/>

<TextInput style={styles.inputBox}

placeholder="Password"

secureTextEntry={true}

onChangeText={password => this.setState({password})}

/>

<TouchableOpacity style={styles.button} onPress={this.signup}>

<Text style={styles.buttonText}>{this.props.type}</Text>

</TouchableOpacity>

</View>

)

}

}
 export default withNavigation(FormRegister);



const styles = StyleSheet.create({

container : {

flexGrow: 1,

justifyContent:'center',

alignItems: 'center'

},



inputBox: {

width:300,

backgroundColor:'#F7F7F7',

fontFamily: 'Nunito',

borderRadius: 4,

paddingHorizontal:16,

fontSize:15,

lineHeight:19,

color:'#000000',

marginVertical: 10,

},

button: {

width:200,

backgroundColor:'#f8a33b',

borderRadius: 4,

marginVertical: 10,

paddingVertical: 13,

},

buttonText: {

fontFamily: 'Nunito',

fontSize: 14,

lineHeight: 19,

color:'#ffffff',

textAlign:'center'

}



});
