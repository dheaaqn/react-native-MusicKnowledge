import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity

} from 'react-native';

import Logo from '../components/Logo';

import Form from '../components/Form';

import {withNavigation} from 'react-navigation';

class Login extends React.Component {

render() {

return(

<View style={styles.container}>

<Logo/>

<Form type="Login"/>

<View style={styles.signupTextCont}>

<Text style={styles.signupText}>Dont have an account?</Text>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>

</View>

</View>

)

}

}
 export default withNavigation(Login);



const styles = StyleSheet.create({

container : {

backgroundColor:'#ffffff',

flex: 1,

alignItems:'center',

justifyContent :'center'

},

signupTextCont : {

flexGrow: 1,

alignItems:'flex-end',

justifyContent :'center',

paddingVertical:16,

flexDirection:'row'

},

signupText: {

fontFamily: 'Nunito',

color:'rgba(0,0,0,1)',

fontSize:16

},

signupButton: {

fontFamily: 'Nunito',

color:'#f8a33b',

fontSize:16,

}

});