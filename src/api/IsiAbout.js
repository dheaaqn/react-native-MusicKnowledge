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
                      <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:10}}>
                        <Avatar
                        size="large"
                        rounded
                        source={this.props.image}
                      />
                        <View style={{marginLeft:30}}>
                        <Text style={styles.textTitle}>{this.props.nama}</Text>
                        <Text style={styles.textTitle}>{this.props.bagian}</Text>
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
        height: 120,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 30,
        marginRight: 30
    },
    textTitle: {
        top: 25,
        fontSize: 14,
        fontWeight: 'bold'
    }
});