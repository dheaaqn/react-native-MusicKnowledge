import React, {Component} from 'react';
import IndexesExam from '../api/IndexesExam';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Left, Right, Body, Button } from 'native-base';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

class IndexExam extends React.Component {

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
            <Text>Exam</Text>
          </Body>
          <Right></Right>
        </View>

        <View  >
          <IndexesExam />
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
 export default withNavigation(IndexExam);
