import React, {Component} from 'react';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

FlatList,

ScrollView,

Image

} from 'react-native';

import {withNavigation} from 'react-navigation';

import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';

import {ListItem } from 'react-native-elements'

import axios from 'axios';

import DropDownItem from 'react-native-drop-down-item';

class IsiMateri extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
        isimateri: [],
        judul:''
    };
    this.get();
  }
 async get() {
    const idsubmateri = this.props.navigation.state.params.id_sub_materi;
    const judulmateri = this.props.navigation.state.params.judul;
    axios.get(`http://3.82.209.169/api/isimateri`,{params: {id_sub_materi:idsubmateri}})
      .then(res => {
        this.setState({ judul:judulmateri });
        const isimateri = res.data;
        this.setState({ isimateri });
      })
  }

     handleEvents(){
const IC_ARR_DOWN = require('../icons/ic_arr_down.png');
const IC_ARR_UP = require('../icons/ic_arr_up.png');
     const { error, isLoaded, isimateri } = this.state;
     for (let item of isimateri){
     let isi = [];
     for (let i = 1; i <= 10; i++) {
      let angka = String(i);
      let header = "header".concat(angka);
      let paragraf = "paragraf".concat(angka);
      let image = "image".concat(angka);
      if (item[header]==null) {}else{
     isi.push(
            <DropDownItem
              key={i}
              style={styles.dropDownItem}
              contentVisible={false}
              invisibleImage={IC_ARR_DOWN}
              visibleImage={IC_ARR_UP}
              header={
                <View>
                  <Text style={{
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                    fontFamily: 'Nunito',
                  }}>{item[header]}</Text>
                </View>
              }
            >
              {item[image]!=null? <Thumbnail style={{width: 100, height: 100}} source={{uri: item[image]}}></Thumbnail>: null}
              <Text style={[
                styles.txt,
                {
                  fontSize: 14,
                  marginTop: 10,
                  fontFamily: 'Nunito_Regular',
                  marginLeft: 20,
                }
              ]}>
                {item[paragraf]}
              </Text>
            </DropDownItem>
        )}      }
return isi;
     }
    }
  render() {
    return (
        <View style={styles.container} >
            <Content padder>
                    <Separator bordered><Text style={{fontSize: 16 ,fontFamily:'Nunito'}}>
                    {this.state.judul}</Text></Separator>
             <ScrollView style={{ alignSelf: 'stretch' }}>
             { this.handleEvents() }
        </ScrollView>
            </Content>
       </View>
    );
  }
}
 export default withNavigation(IsiMateri);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
});