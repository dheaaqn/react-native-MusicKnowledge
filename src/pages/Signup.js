import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity

} from 'react-native';



import Logo from '../components/Logo';

import Form from '../components/FormRegister';

import {withNavigation} from 'react-navigation';

class Signup extends React.Component {

render() {

return(

<View style={styles.container}>

<Logo/>

<Form type="Signup"/>

<View style={styles.signupTextCont}>

<Text style={styles.signupText}>Already have an account?</Text>

<TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>

</View>

</View>

)

}

}
 export default withNavigation(Signup);



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

color:'rgba(0,0,0,1)',

fontSize:16

},

signupButton: {

color:'#f8a33b',

fontSize:16,

fontWeight:'500'

}

});