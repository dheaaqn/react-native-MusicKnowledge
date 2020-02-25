import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';
import {ListItem } from 'react-native-elements'
import axios from 'axios';

import DropDownItem from 'react-native-drop-down-item';

class IndexesExam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id_user:0,
    };
    this.getData();
  }
    onPress=()=>{
this.props.navigation.navigate('IsiExam',{id_user:this.state.id_user})      
//  console.log("haha")
  }
    getData = async () => {
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const id = parsed.id;
      this.setState({id_user:id});
      }
  render() {
       return (
          <TouchableOpacity onPress={this.onPress}>
            <Image source={require('../images/button.png')} style={{top: 60}}/>
          </TouchableOpacity>
     );
  }
}
export default withNavigation(IndexesExam);

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});
