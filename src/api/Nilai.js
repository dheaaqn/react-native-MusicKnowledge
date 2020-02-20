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
  }
  async componentDidMount() {
            console.log(this.state.best);
            const benars = this.props.navigation.state.params.jumlahbenar;
            const terjawabs = this.props.navigation.state.params.jumlahterjawab;
            const kosongs = this.props.navigation.state.params.jumlahkosong;
            const salahs = this.props.navigation.state.params.jumlahsalah;
            const idsubmateris = this.props.navigation.state.params.idsubmateri;
            const idusers = this.props.navigation.state.params.iduser;
            this.setState({idsubmateri:idsubmateris});
            this.setState({iduser:idusers});
            this.setState({ benar: benars});
            this.setState({ terjawab: terjawabs});
            this.setState({ kosong: kosongs});
            this.setState({ salah: salahs});
            const hitung = benars/terjawabs*100;
            this.setState({ nilai: hitung});
            axios.get('http://3.82.209.169/api/nilai',{params: {id_user:idusers,id_soal:idsubmateris}})
                .then(res => {
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
                 <Text style={styles.text}>Test</Text>
                  <Text style={{
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                  }}>{this.state.nilai}</Text>            
         <Text style={styles.text}>best {this.state.best}</Text>
         <Text style={styles.text}>iduser {this.state.iduser}</Text>
         <Text style={styles.text}>idsubmateri {this.state.idsubmateri}</Text>
         <Text style={styles.text}>benar {this.state.benar}</Text>
         <Text style={styles.text}>salah {this.state.salah}</Text>
         <Text style={styles.text}>kosong {this.state.kosong}</Text>
         <Text style={styles.text}>terjawab {this.state.terjawab}</Text>
                  <TouchableOpacity onPress={this.nextQuestion}>
                    <Text>Next</Text>
                  </TouchableOpacity>
         </View>
     );
  }
}
export default withNavigation(Nilai);

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
