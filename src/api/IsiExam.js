import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 import CountdownCircle from 'react-native-countdown-circle';
import {withNavigation} from 'react-navigation';
import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';
import {ListItem } from 'react-native-elements'
import axios from 'axios';
import DropDownItem from 'react-native-drop-down-item';

class IsiExam extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      soal: [],
      answered: false,
      value: null,
      terjawab: 0,
      benar: 0,
      index: 0,
      salah:0,
      kosong:0,
      id_user:0,
      nomor:1,
      totalsoal:0,
      id_sub_materi:1,
      waktu:10
    };
    this.get();
  }
  get() {
    const id_users = this.props.navigation.state.params.id_user;
     axios.get(`http://3.82.209.169/api/allsoal`)
      .then(res => {
        const soal = res.data;
        this.setState({id_user:id_users});
        this.setState({ soal });
        this.setState({totalsoal:this.state.soal.length});
      })
 }
 next(){    
    var jumlah = this.state.soal.length -1;
    this.state.terjawab = this.state.terjawab+1;
    if (this.state.index<jumlah) {
        this.state.nomor = this.state.nomor+1;
        this.state.waktu = this.state.waktu+1;
        this.state.index++;
        this.state.answered = false;
      }else{
      var benars = this.state.benar;
      var terjawabs = this.state.terjawab;
      var salahs = this.state.salah;
      var kosongs = this.state.kosong;
      var idsubmateris = this.state.id_sub_materi;
      var idusers = this.state.id_user;
      this.props.navigation.navigate('Nilai',{jumlahbenar:benars,jumlahterjawab:terjawabs,jumlahkosong:kosongs,jumlahsalah:salahs,idsubmateri:idsubmateris,iduser:idusers});
      }
  }
  handleEvents(){
    const { soal, value, benar } = this.state;
    const total = soal.length;
    var jumlah = total -1;
    for (var i=0; i < total; i++){
     if (value!=null) {
      if (value==this.state.soal[i].jawaban) {
        this.state.jawaban = "Benar";
        this.state.answered = true;
        this.state.benar = this.state.benar+1;
        this.next();
      }   else if (value=="e") {
        this.state.jawaban = "Kosong";
        this.state.answered = true;
        this.state.kosong = this.state.kosong+1;
        this.next();
    }   else if (value!=this.state.soal[i].jawaban) {
        this.state.jawaban = "Salah";
        this.state.answered = true;
        this.state.salah = this.state.salah+1;
        this.next();
    }      
    } 
    

     
      let isi = [];
      isi.push(
        <View key={this.state.index}>
        <Text 
          style={styles.totalSoal}
          key={this.state.nomor}>
            {this.state.nomor}/{this.state.totalsoal}
          </Text>
        <Right>
           <CountdownCircle
            seconds={this.state.waktu}
            key={this.state.waktu}
            radius={18}
            borderWidth={5}
            color="#FFA02F"
            bgColor="#f7f7f7"
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={(value) => {this.setState({value:'e'})}}
          /> 
        </Right>
          <Text
            style={styles.textQuestion}
            key={this.state.soal[this.state.index].soal}>
              {this.state.soal[this.state.index].soal}
          </Text>
                  
          <TouchableOpacity style={styles.option} key={this.state.soal[this.state.index].a} onPress={(value) => {this.setState({value:'a'})}}>
            <Text style={styles.textOption}>{this.state.soal[this.state.index].a}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} key={this.state.soal[this.state.index].b} onPress={(value) => {this.setState({value:'b'})}}>
            <Text style={styles.textOption}>{this.state.soal[this.state.index].b}</Text>
          </TouchableOpacity>
                
          <TouchableOpacity style={styles.option} key={this.state.soal[this.state.index].c} onPress={(value) => {this.setState({value:'c'})}}>
            <Text style={styles.textOption}>{this.state.soal[this.state.index].c}</Text>
          </TouchableOpacity>
                  
          <TouchableOpacity style={styles.option} key={this.state.soal[this.state.index].d} onPress={(value) => {this.setState({value:'d'})}}>
            <Text style={styles.textOption}>{this.state.soal[this.state.index].d}</Text>
          </TouchableOpacity>
        </View>
        )
         return isi;
       }
    }
    nextQuestion() {
      this.setState({ index: + 1})
    }

    render() {
      console.disableYellowBox = true;
      const { params } = this.props.navigation.state;
      const benar = this.props.navigation.getParam("benar");
      const terjawab = this.props.navigation.getParam("terjawab");
       return (
        <View style={styles.container} >
          { this.handleEvents() }
         </View>
     );
  }
}
export default withNavigation(IsiExam);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  totalSoal: {
    fontSize: 18,
    marginTop: 41,
    marginLeft: 45,
    color: '#FFA02F',
    fontWeight: 'bold'
  },
  textQuestion: {
    marginVertical: 90,
    marginHorizontal: 48,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  option: {
    height: 53,
    backgroundColor: '#f7f7f7',
    marginHorizontal: 45,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textOption: {
    color: '#F8A23B',
    textAlign: 'center'
  }
});
