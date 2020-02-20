import React, {Component} from 'react';
import SubMateri from '../api/SubMateri';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { Container, Button } from 'native-base';
import { withNavigation } from 'react-navigation';

import ModulesCard from '../components/ModulesCard';

class Home extends React.Component {
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
      <Container>
        <View style={{backgroundColor: '#F49423', height: 200}}>
          <View style={{top: 30, left: 30}}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source={require('../icons/menu.png')} />
            </Button>
            <Text style={styles.hiName}>Hi {this.state.name}!</Text>
            <Text style={styles.hiDesc}>What do you want to learn today?</Text>
          </View>
        </View>

        <ScrollView>
          <ModulesCard
            judul={'Mengenal Dasar Seni Musik'}
            navigation={this.props.navigation}/>
          <ModulesCard
            judul={'Unsur-unsur dalam Seni Musik'}/>
          <ModulesCard
            judul={'Aliran-aliran dalam Seni Musik'}/>
          <ModulesCard
            judul={'Mengenal Musik di Daerah Nusantara'}/>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  hiName: {
    color: '#FFF',
    marginTop: 30,
  },
  hiDesc: {
    color: '#FFF',
  }
})
 export default withNavigation(Home);
