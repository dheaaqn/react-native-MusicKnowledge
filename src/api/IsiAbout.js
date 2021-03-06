import React, {Component} from 'react';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

FlatList,

Image,

ImageBackground,

Linking

} from 'react-native';

import {withNavigation} from 'react-navigation';

import {ListItem,Avatar } from 'react-native-elements'

import { Card, Content, Badge, CardItem, Body, Right, Left} from 'native-base';

import axios from 'axios';

class IsiAbout extends React.Component {
  render() {
    return (
        <Content padder>
                <Card style={styles.cardContainer}>
                    <CardItem button onPress={this.props.link}>
                      <View style={{flexDirection:'row', flexWrap:'wrap',marginVertical:'5%',marginHorizontal:'5%'}}>
                        <Avatar
                        size="large"
                        rounded
                        source={this.props.image}
                      />
                        <View style={{marginHorizontal:'5%'}}>
                        <Text style={styles.textTitle}>{this.props.nama}</Text>
                        <Text style={styles.textTitles}>{this.props.bagian}</Text>
                        </View>
                      </View>
                    </CardItem>
                </Card>
        </Content>
    );
  }
}
 export default withNavigation(IsiAbout);

const styles = StyleSheet.create({
   cardContainer: {
        borderRadius: 8,
        marginVertical:30,
        marginHorizontal:15,
        width: '100%',
        height: '100%'
    },
    textTitle: {
        fontFamily: 'Nunito',
        top: 25,
        fontSize: 13,
    },
    textTitles: {
        fontFamily: 'Nunito_Regular',
        top: 25,
        fontSize: 13,
    }
});