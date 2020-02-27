import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image, Alert, Modal } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'; 
import {withNavigation} from 'react-navigation';
import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';
import {ListItem } from 'react-native-elements'
import axios from 'axios';
import CountdownCircle from 'react-native-countdown-circle';
import DropDownItem from 'react-native-drop-down-item';

class IsiQuiz extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      soal: [],
      answered: false,
      value: null,
      terjawab: 0,
      benar: 0,
      salah:0,
      kosong:0,
      index: 0,
      id_user:0,
      nomor:1,
      totalsoal:0,
      id_sub_materi:0,
      waktu:10,
      Alert_Visibility: false
    };
    this.get();
  }
  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }
   get() {
    const idsubmateri = this.props.navigation.state.params.id_sub_materi;
    const iduser = this.props.navigation.state.params.id_user;
    axios.get(`http://3.82.209.169/api/soal/${idsubmateri}`)
      .then(res => {
        const soal = res.data;
        this.setState({id_user:iduser});
        this.setState({id_sub_materi:idsubmateri});
        this.setState({ soal });
        this.setState({totalsoal:this.state.soal.length});
      })
  }
    ok_Button=()=>{
        var jumlah = this.state.soal.length -1;
        this.state.value = null;
        this.state.terjawab = this.state.terjawab+1;
      if (this.state.index<jumlah) {
        this.lanjut();
      }else{
        this.nilai();
      }
        this.Show_Custom_Alert(!this.state.Alert_Visibility);
  }
  lanjut(){
        this.state.nomor = this.state.nomor+1;
        this.state.waktu = this.state.waktu+1;
        this.state.index++;
        this.state.answered = false;    
  }
  nilai(){
      var benars = this.state.benar;
      var terjawabs = this.state.terjawab;
      var salahs = this.state.salah;
      var kosongs = this.state.kosong;
      var idsubmateris = this.state.id_sub_materi;
      var idusers = this.state.id_user;
      this.props.navigation.navigate('Nilai',{jumlahbenar:benars,jumlahterjawab:terjawabs,jumlahkosong:kosongs,jumlahsalah:salahs,idsubmateri:idsubmateris,iduser:idusers});  
  }
  handleEvents(){
    const { soal, value, benar } = this.state;
    const total = soal.length;
    var jumlah = total -1;
    for (var i=0; i < total; i++){
     if (value!=null&&this.state.answered == false) {
      if (value==this.state.soal[i].jawaban) {
        this.state.jawaban = require('../images/correct.png');
        this.state.answered = true;
        this.state.benar = this.state.benar+1;
        this.Show_Custom_Alert(true);
     } else if (value== "e") {
        this.state.jawaban = require('../images/timesup.png');
        this.state.answered = true;
        this.state.kosong = this.state.kosong+1;
        this.Show_Custom_Alert(true);
     } else if (value!=this.state.soal[i].jawaban) {
        this.state.jawaban = require('../images/wrong.png');
        this.state.answered = true;
        this.state.salah = this.state.salah+1;
        this.Show_Custom_Alert(true);
    }        
    } 
    

     
      let isi = [];
      isi.push(
        <View key={this.state.index}>
        <Modal
 
          visible={this.state.Alert_Visibility}
 
          transparent={true}
 
          animationType={"fade"}

          onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >
 
 
            <View style={{ flex:1, alignItems: 'center',paddingTop:10,backgroundColor:'rgba(200, 200, 200,0.8)'}}>
 
 
                <View>
 
                    <Image source={this.state.jawaban}/>
 
                    <View style={{ width: '100%', height: 2,marginTop:90}} />
 
                     <Text style={styles.alertIsi}> {this.state.soal[this.state.index].penjelasan} </Text>
  
                    <View style={{flexDirection: 'row', height: '30%',marginTop:10}}>
 
                        <TouchableOpacity 
                            onPress={this.ok_Button} 
                             >
    
                            <Text style={styles.button}> OK </Text>
                
                        </TouchableOpacity> 
                    </View>
                  
                </View>
 
            </View> 
        </Modal>
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
            textStyle={{ fontFamily: 'Nunito',fontSize: 20 }}
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
export default withNavigation(IsiQuiz);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safearea: {
    flex: 1,
    fontFamily: 'Nunito',
    marginTop: 100,
    justifyContent: "space-between"
  },
  totalSoal: {
    fontSize: 18,
    marginTop: 41,
    fontFamily: 'Nunito',
    marginLeft: 45,
    color: '#FFA02F',
  },
  textQuestion: {
    marginVertical: 90,
    marginHorizontal: 48,
    fontFamily: 'Nunito',
    fontSize: 15,
    textAlign: 'center'
  },
  option: {
    height: 53,
    backgroundColor: '#f7f7f7',
    marginHorizontal: 45,
    fontFamily: 'Nunito',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textOption: {
    color: '#F8A23B',
    fontFamily: 'Nunito',
    textAlign: 'center'
  },
  button:{
    color:'#F8A23B',
    backgroundColor:'#fff',
    fontSize:12,
    padding:15,
    borderRadius:7,
    fontFamily: 'Nunito'
  },
  alertIsi: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#F8A23B',
    padding:20,
    fontSize: 15,
    fontFamily: 'Nunito',
    borderRadius:10
  },
});
