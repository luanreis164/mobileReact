import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios:[
        {id: 1, nome: 'Mouse Gamer', preco: 159.90, tipo: 'Acessorios de PC', source:require('./assets/anuncios1.jpg')},
        {id: 2, nome: 'Teclado Gamer', preco: 259.90, tipo: 'Acessorios de PC', source:require('./assets/anuncios2.jpg')},
        {id: 3, nome: 'Cadeira Gamer', preco: 669.90, tipo: 'Itens de Escritório', source:require('./assets/anuncios3.jpg')},
        {id: 4, nome: 'Xbox Series S 1TB', preco: 2599.90, tipo: 'Videogame', source:require('./assets/anuncios4.jpg')},
        {id: 5, nome: 'Monitor Gamer 144GHZ', preco: 2259.90, tipo: 'Monitores e TVs', source:require('./assets/anuncios5.jpg')},
        {id: 6, nome: 'Microfone Gamer', preco: 719.90, tipo: 'Audios e video', source:require('./assets/anuncios6.jpg')},
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>Anuncios</Text>
          <Text style={styles.textoPessoa}>Equipamentos Gamers</Text>
        </View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={this.state.anuncios}
        keyExtractor = {(item) => item.id}
        renderItem = {({item})=> <Anuncio data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaHeader:{
    backgroundColor: 'blue',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader:{
    fontSize: 50,
    color: '#eee',
    letterSpacing: 6, 
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  areaPessoa:{
    backgroundColor: '#222',
    width: 250,
    height: 300,
    marginTop: 50,
    marginLeft: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  },
  textoPreco:{
    fontSize: 40,
    color: '#f82',
    fontWeight: 'bold',
  },
  imgAnuncio:{
    width: 150,
    height: 150,
    overflow: 'hidden',
  },
})

export default App;

class Anuncio extends Component {
  render() {
    return(
      <View style={styles.areaPessoa}>
        <Image style={styles.imgAnuncio} source={this.props.data.source}/>
        <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
        <Text style={styles.textoPreco}>{this.props.data.preco.toFixed(2)}</Text>
      </View>
    )
  }
}