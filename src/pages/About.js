import React, {Component} from 'react';
import IsiAbout from '../api/IsiAbout';
import { StyleSheet, Text, View, Image,ScrollView,Linking  } from 'react-native';
import { Container, Button, Left, Body, Right, Content } from 'native-base';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

class About extends React.Component {
    render() {
    return (
      <Container>
      <View>
        <View style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source={require('../icons/menu_icon_orange.png')} />
            </Button>
          </Left>
          <Body>
            <Text style={{fontFamily: 'Nunito'}}>About Us</Text>
          </Body>
          <Right></Right>
        </View>

        <View  >
        <ScrollView>
          <IsiAbout
            nama={'Filemon Steven Juliyanto'}
            bagian={'Front-End & Back-End'}
            link={() => Linking.openURL('https://www.instagram.com/fxenxen/')}
            image={require('../images/xenxen.jpg')}
          />
          <IsiAbout
            nama={'Fakhrureza Fariardhany'}
            bagian={'UI/UX Designer'}
            link={() => Linking.openURL('https://www.instagram.com/_zareza.fr_/')}
            image={require('../images/reza.jpeg')}
            />
          <IsiAbout
            nama={'Intan Alrisa'}
            bagian={'Front-End Developer'}
            link={() => Linking.openURL('https://www.instagram.com/intan_alrisa/')}
            image={require('../images/intan.jpeg')}
            />
          <IsiAbout
            nama={'Dhea Qonita Irawan'}
            bagian={'Front-End Developer'}
            link={() => Linking.openURL('https://www.instagram.com/dheaaqn/')}
            image={require('../images/dea.jpg')}
          />
          <IsiAbout
            nama={'Dhanissa Nafiul Lathifa'}
            bagian={'Front-End Developer'}
            link={() => Linking.openURL('https://www.instagram.com/dhanissathifa/')}
            image={require('../images/dhanisa.jpg')}
            />
          <IsiAbout
            nama={'Fajar Dwi Cahyo'}
            bagian={'Front-End Developer'}
            link={() => Linking.openURL('https://www.instagram.com/fjrdwc/')}
            image={require('../images/fajar.jpeg')}
          />
                    <IsiAbout/>
        </ScrollView>
        </View>
      </View>
      </Container>
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
 
export default withNavigation(About);