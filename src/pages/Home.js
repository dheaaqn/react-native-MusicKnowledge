import React, {Component} from 'react';
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
            <Text style={styles.hiName}>Hi {this.state.name.toUpperCase()}!</Text>
            <Text style={styles.hiDesc}>What do you want to learn today?</Text>
          </View>
        </View>

        <ScrollView>
          <ModulesCard
            judul={'Sejarah Seni Suara'}
            image={require('../images/card-illus-1.png')}
            id_sub_materi={2}
            navigation={this.props.navigation}/>
          <ModulesCard
            id_sub_materi={3}
            image={require('../images/card-illus-2.png')}
            judul={'Jenis-jenis Lagu Nusantara'}/>
          <ModulesCard
            id_sub_materi={4}
            image={require('../images/card-illus-3.png')}
            judul={'Musik Daerah Nusantara'}/>
          <ModulesCard
            judul={'Unsur-unsur Musik Nusantara'}
            image={require('../images/card-illus-4.png')}
            id_sub_materi={5}
            navigation={this.props.navigation}/>
          <ModulesCard
            image={require('../images/genre.png')}
            id_sub_materi={6}
            judul={'Genre Musik Nusantara'}/>
          <ModulesCard
            image={require('../images/fugsi.png')}
            id_sub_materi={7}
            judul={'Fungsi Seni Musik'}/>
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
