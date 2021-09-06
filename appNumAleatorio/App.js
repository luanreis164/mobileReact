import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Button, Pressable,TextInput} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: '',
    };
    
    this.gerar = this.gerar.bind(this);
   }
   
  gerar(){   
    var num = Math.floor(Math.random() * 10)
    
    this.setState({numero: 'Numero: ' + num});
  }
        


  render(){
    
    return(
      <View style={styles.container}>
      
    <Text style={styles.titulo}> Numero Aleatorio </Text>

   <Image
          source={{ uri: 'http://acessaber.com.br/wp-content/uploads/2017/07/1-13-200x194.jpg'}}
          style={styles.imagemCentr}/>

          
        
    <Button title="Calcular" onPress={this.gerar} />

    <Text style={styles.texto}> {this.state.numero} </Text>



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
    color :"blue",
    margin: 10,
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
  margin:20
}



})
 
export default App;