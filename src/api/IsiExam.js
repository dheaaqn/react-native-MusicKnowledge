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
      waktu:7
    };
  }
  async componentDidMount() {
    const id_users = this.props.navigation.state.params.id_user;
    this.setState({id_user:id_users});
     await axios.get(`http://3.82.209.169/api/allsoal`)
      .then(res => {
        const soal = res.data;
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
                <View>
                   <CountdownCircle
                        seconds={this.state.waktu}
                        radius={30}
                        borderWidth={8}
                        color="#ff003f"
                        bgColor="#fff"
                        textStyle={{ fontSize: 20 }}
                        onTimeElapsed={(value) => {this.setState({value:'e'})}}
                    />
                   <Text style={{
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                  }}
                  key={this.state.soal[this.state.index].soal}
                  >{this.state.soal[this.state.index].soal}</Text>
                   <Text style={{
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                  }}
                  key={this.state.nomor}
                  >{this.state.nomor}/{this.state.totalsoal}</Text>
                                
                  <TouchableOpacity key={this.state.soal[this.state.index].a} onPress={(value) => {this.setState({value:'a'})}}>
                    <Text>{this.state.soal[this.state.index].a}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].b} onPress={(value) => {this.setState({value:'b'})}}>
                    <Text>{this.state.soal[this.state.index].b}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].c} onPress={(value) => {this.setState({value:'c'})}}>
                    <Text>{this.state.soal[this.state.index].c}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].d} onPress={(value) => {this.setState({value:'d'})}}>
                    <Text>{this.state.soal[this.state.index].d}</Text>
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
      const { params } = this.props.navigation.state;
      const benar = this.props.navigation.getParam("benar");
      const terjawab = this.props.navigation.getParam("terjawab");
       return (
        <View style={styles.container} >
          { this.handleEvents() }

         <Text style={styles.text}>{JSON.stringify(benar)}</Text>
           <Text style={styles.text}>{JSON.stringify(terjawab)}</Text>
         <Text style={styles.text}>{this.state.benar}</Text>
           <Text style={styles.text}>{this.state.terjawab}</Text>
         </View>
     );
  }
}
export default withNavigation(IsiExam);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F49423",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#000",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});
