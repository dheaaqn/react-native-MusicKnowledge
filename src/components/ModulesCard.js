import React, {Component} from 'react';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

FlatList,

Image,

ImageBackground

} from 'react-native';

import {withNavigation} from 'react-navigation';

import {ListItem } from 'react-native-elements'

import { Card, Content, Badge, CardItem, Body, Right, Left} from 'native-base';

import axios from 'axios';

class SubMateri extends React.Component {
  render() {
    return (
        <Content padder>
                <Card style={styles.cardContainer}>
                    <CardItem button onPress={() => this.props.navigation.navigate('IsiMateri',{id_sub_materi:this.props.id_sub_materi,judul:this.props.judul})}>
                        <Left><Text style={styles.textTitle}>{this.props.judul}</Text></Left>
                        <Right><Image source={this.props.image} style={{top: 48}}/></Right>
                    </CardItem>
                </Card>
        </Content>
    );
  }
}
 export default withNavigation(SubMateri);

const styles = StyleSheet.create({
   cardContainer: {
        borderRadius: 8,
        height: 186,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 30,
        marginRight: 30
    },
    textTitle: {
        top: 25,
        left: 25,
        fontSize: 14,
        fontWeight: 'bold'
    }
});