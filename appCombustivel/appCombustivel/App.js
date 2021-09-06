import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Button, Pressable,TextInput} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      alcool: '',
      gasolina:'',
      resultado:'',
    };
    
    this.calcular = this.calcular.bind(this);
   }

    
   
  calcular(){
   
    if ( (this.state.alcool === '') || (this.state.gasolina === '') ){
      alert('Digite os valores!')
      return;
    } 
   var r = this.state.alcool / this.state.gasolina;
     if (r < 0.7){
      this.setState({resultado: 'Melhor abastecer com o Etanol '});
      } else{ this.setState({resultado:'Melhor abastecer com Gasolina'})
      }

  }
        


  render(){
    
    return(
      <View style={styles.container}>
      
    <Text style={styles.titulo}>Alcool ou Gasolina </Text>

    <Image
          source={{ uri: 'https://enfoquebusiness.com.br/wp-content/uploads/2021/02/COMBUST%C3%8DVEL-ILUSTRA%C3%87%C3%83O-AUMENTO-DE-PRE%C3%87OS.jpg'}}
          style={styles.imagemCentr}/>

    <TextInput
      style={styles.input}
      placeholder="Valor Alcool"
      onChangeText={ (texto) => this.setState({alcool: texto})}
      />

    <TextInput
        style={styles.input}
        onChangeText={ (texto) => this.setState({gasolina : texto})}
        placeholder="Valor Gasolina"
        keyboardType="numeric"
      />
        
        
    <Button title="Calcular" onPress={this.calcular} />

    <Text style={styles.texto}> {this.state.resultado} </Text>

            


      </View>
    );
  }
}
 



const styles = StyleSheet.create({
  container:{

    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
  },
  botao:{
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#999'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
    marginTop:20,
  },
  imagemCentr: {
    alignItems: 'center',
    width: 400,
    height: 200,
    margin: 10,
},
  texto:{
  textAlign: 'center',
  fontSize: 25,
}



})
 
export default App;
