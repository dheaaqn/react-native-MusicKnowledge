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

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
import {withNavigation} from 'react-navigation';

import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';

import {ListItem } from 'react-native-elements'

import axios from 'axios';

import DropDownItem from 'react-native-drop-down-item';

class Nilai extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      terjawab: 0,
      benar: 0,
      salah: 0,
      kosong: 0,
      nilai : 0,
      idsubmateri: 0,
      iduser:0,
      best: null,
      idnilai:0,
      data: []
    };
    this.get();
  }
  async get() {
            const benars = this.props.navigation.state.params.jumlahbenar;
            const terjawabs = this.props.navigation.state.params.jumlahterjawab;
            const kosongs = this.props.navigation.state.params.jumlahkosong;
            const salahs = this.props.navigation.state.params.jumlahsalah;
            const idsubmateris = this.props.navigation.state.params.idsubmateri;
            const idusers = this.props.navigation.state.params.iduser;
            const hitung = benars/terjawabs*100;
            axios.get('http://3.82.209.169/api/nilai',{params: {id_user:idusers,id_soal:idsubmateris}})
                .then(res => {
                  this.setState({ nilai: hitung});
                  this.setState({idsubmateri:idsubmateris});
                  this.setState({iduser:idusers});
                  this.setState({ benar: benars});
                  this.setState({ terjawab: terjawabs});
                  this.setState({ kosong: kosongs});
                  this.setState({ salah: salahs});
                  this.setState({data:res.data});
                  for (let item of this.state.data) {
                  const bests = item.nilai;
                  this.setState({ best:bests });
                  this.setState({ idnilai:item.id_nilai });
                  }
                })
              }

    nextQuestion= () => {
      if (this.state.best==null) {
        axios.post('http://3.82.209.169/api/nilai', {id_user:this.state.iduser,id_soal:this.state.idsubmateri,nilai:this.state.nilai});      
        this.props.navigation.navigate('Home');      
        }else if (this.state.nilai>this.state.best) {
          const nilais = this.state.nilai;
          const idnilais = this.state.idnilai;
          axios.put(`http://3.82.209.169/api/editnilai/${idnilais}?nilai=${nilais}`)
          .then(res => {
            const data = res.data;
          })
          
        this.props.navigation.navigate('Home');      
        } else{
    this.props.navigation.navigate('Home');      
    }

    }
    render() {
       return (
        <View style={styles.container} >
         <Text style={styles.head}>Your Score</Text>
         <Text style={styles.text}>{Math.trunc(this.state.nilai)}</Text>            
         <Text style={styles.head}>Your Best Score</Text>
         <Text style={styles.text}>{Math.trunc(this.state.best)}</Text>
         <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:50}}>
         <Image source={require('../images/correct.png')} style={styles.gambar}/>
         <Text style={styles.hasil}>{this.state.benar}</Text>
         <Image source={require('../images/wrong.png')} style={styles.gambar}/>
         <Text style={styles.hasil}>{this.state.salah}</Text>
         <Image source={require('../images/timesup.png')} style={styles.gambar}/>
         <Text style={styles.hasil}>{this.state.kosong}</Text>
         </View>
                  <TouchableOpacity onPress={this.nextQuestion}>
                  <Text style={styles.button}> Go Home </Text>
                  </TouchableOpacity>
         </View>
     );
  }
}
export default withNavigation(Nilai);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  button:{
    color:'#fff',
    textAlign: "center",
    backgroundColor:'#F8A23B',
    fontSize:15,
    padding:15,
    borderRadius:7,
    marginTop: 70,
    shadowColor: "#000",
    fontFamily: 'Nunito'
  },
  head:{
    marginTop:30,
    color: "#F49423",
    fontSize: 24,
    textAlign: "center",
    letterSpacing: -0.02,
    fontFamily: 'Nunito'
  },
  hasil:{
    margin:10,
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontFamily: 'Nunito'
   },
  gambar:{
    marginLeft:15,
    marginRight:15,
    width: 50,
    height:50,
  },
   text: {
    fontSize: 48,
    fontFamily: 'Nunito',
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
