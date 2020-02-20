import React, {Component} from 'react';
import SubQuiz from '../api/SubQuiz';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { Container, Button, Left, Body, Right, Content } from 'native-base';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

class Quiz extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
    };
  }
UNSAFE_componentWillMount() {
      this.getData();
  }
    getData = async () => {
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const name = String(parsed.name);
      this.setState({name: name});
      }
    render() {
    return (
      <View>
        <View style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source={require('../icons/menu_icon_orange.png')} />
            </Button>
          </Left>
          <Body>
            <Text>Quiz</Text>
          </Body>
          <Right></Right>
        </View>

        <View  >
          <SubQuiz />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    marginVertical: 30,
    marginHorizontal: 30,
    flex: 1,
    flexDirection: 'row'
  }
})
 
export default withNavigation(Quiz);