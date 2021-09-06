import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Button, Pressable,TextInput} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: '',
      altura:'',
      resultado:'',
    };
    
    this.calcular = this.calcular.bind(this);
   }

    
   
  calcular(){
   
    if ( (this.state.peso === '') || (this.state.altura === '') ){
      alert('Digite os valores!')
      return;
    } 
   var imc = this.state.peso / (this.state.altura * this.state.altura);
     if (imc > 30){
       this.setState({resultado: 'Obesidade.'});
      } else if( imc > 25 ){
         this.setState({resultado:'Acima do peso recomendado.'})
      } else if(imc > 18.5){
        this.setState({resultado:'Peso normal.'})
      } else this.setState({resultado:'Magreza.'})

  }
        


  render(){
    
    return(
      <View style={styles.container}>
      
    <Text style={styles.titulo}> Calculo IMC </Text>

   <Image
          source={{ uri: 'https://www.maestrosaude.com.br/wp-content/uploads/2016/04/Tabela-imc-Calculo-imc-oms.jpg'}}
          style={styles.imagemCentr}/>

    <TextInput
      style={styles.input}
      placeholder="Valor peso"
      keyboardType="numeric"
      onChangeText={ (texto) => this.setState({peso: texto})}
      />

    <TextInput
        style={styles.input}
        onChangeText={ (texto) => this.setState({altura : texto})}
        placeholder="Valor altura"
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
    height: 300,
    margin: 10,
},
  texto:{
  textAlign: 'center',
  fontSize: 25,
}



})
 
export default App;