/**

* Sample React Native App

* https://github.com/facebook/react-native

* @flow

*/



import React,{Component} from 'react';

import {

StyleSheet,

View,

StatusBar

} from 'react-native';

import Drawer from './src/Drawer';

import LoginScreen from './src/Login';

import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
constructor(props) {
    super(props);
    this.state = { IsLogin:false };
  }
  UNSAFE_componentWillMount() {
    this.retrieveData();
	  }
render() {
  	if (this.state.IsLogin==true) { 	 		
	return (
    <Drawer/>
    );
  	}else{  		
	return (
		<LoginScreen/>
    );
  	}
}
   retrieveData = async () => {
    try {
      let test = await AsyncStorage.getItem('data');
      let parsed = JSON.parse(test);
      if (test!=null) {
      this.setState({ IsLogin: true });      	
      }else{	
      this.setState({ IsLogin: false });      	
      }
    }
    catch{
    	this.setState({ IsLogin: false });
    }
  }
}