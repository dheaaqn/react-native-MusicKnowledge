import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
import {ListItem } from 'react-native-elements'
import { Card, Content, Badge, CardItem, Body, Right, Left, Button} from 'native-base';
import axios from 'axios';

class SubQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        submateri: [],
        id_user: 0,
    };
  }
    getData = async () => {
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const id = parsed.id;
      this.setState({id_user:id});
      }
  UNSAFE_componentWillMount() {
      this.getData();
      axios.get(`http://3.82.209.169/api/submateri`,{params: {id_materi:3}})
      .then(res => {
        const submateri = res.data;
        console.log(submateri);
        this.setState({ submateri });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <Button warning style={styles.buttonStart} onPress={()=>this.props.navigation.navigate('IsiQuiz',{id_sub_materi:item.id_sub_materi,id_user:this.state.id_user})}>
      <Left>
        <Text style={styles.text}>Modules 1</Text>
      </Left>
      <Body>
        <Text style={styles.text}>Start Quiz</Text>
      </Body>
      <Right><Image source={require('../icons/ic_arr_next.png')}/></Right>
    </Button>
)
  render() {
    return (
        <View styles={styles.container}>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.submateri}
               renderItem={this.renderItem}
             />
       </View>
    );
  }
}
 export default withNavigation(SubQuiz);

const styles = StyleSheet.create({
  container: {
  },
  buttonStart: {
    marginVertical: 15,
    marginHorizontal: 30,
    height: 60,
    padding: 10,
  },
  text: {
    color: '#fff'
  }
});