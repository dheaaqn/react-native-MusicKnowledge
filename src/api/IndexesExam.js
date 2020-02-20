import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';
import {ListItem } from 'react-native-elements'
import axios from 'axios';

import DropDownItem from 'react-native-drop-down-item';

class IndexesExam extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      id_user:0,
    };
  }
  async componentDidMount() {
    const test = await AsyncStorage.getItem('data');
    const parsed = JSON.parse(test);
    const id = parsed.id;
    this.setState({id_user:id});
  }
  render() {
       return (
        <View style={styles.container} >
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('IsiExam',{id_user:this.state.id_user})}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
         </View>
     );
  }
}
export default withNavigation(IndexesExam);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F49423",
    flex: 1,
    paddingHorizontal: 20
  },
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
