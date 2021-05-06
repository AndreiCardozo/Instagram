
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Lista from './src/Lista/index'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Mais um dia de muitos bugs :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Bora trabalhar Haha',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        },
        {
          id: '6',
          nome: 'Joyce Silva',
          descricao: ':D',
          imgperfil: 'https://scontent.fjdf2-1.fna.fbcdn.net/v/t1.6435-9/122689108_122726869610482_8399208025431687896_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W162PxfuMrkAX9bcJW6&_nc_ht=scontent.fjdf2-1.fna&oh=ef42e2b49da9b939d4ead45932cec0b4&oe=60B39782',
          imgPublicacao: 'https://scontent.fjdf2-1.fna.fbcdn.net/v/t1.6435-9/122689108_122726869610482_8399208025431687896_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W162PxfuMrkAX9bcJW6&_nc_ht=scontent.fjdf2-1.fna&oh=ef42e2b49da9b939d4ead45932cec0b4&oe=60B39782',
          likeada: false,
          likers: 1564
        },
        {
          id: '7',
          nome: 'Andrei Cardozo',
          descricao: 'Parceraço',
          imgperfil: 'https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/53321672_2032795223498225_7282406488214077440_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=L9nlzVv83rIAX-m3lfi&_nc_ht=scontent.fjdf2-2.fna&oh=9ed2ac0e4d9779c7a11cf1ab1a424cb4&oe=60B35886',
          imgPublicacao: 'https://scontent.fjdf2-1.fna.fbcdn.net/v/t31.18172-8/23270215_1417181621726258_7196971252504623425_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=vooHX_mf25MAX-c8iHh&_nc_ht=scontent.fjdf2-1.fna&oh=d106b228c2b2e97e5d547d6e82b1b90c&oe=60B2D8C6',
          likeada: false,
          likers: 25
        },
      ]
    };

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />}
        >


        </FlatList>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send: {
    width: 23,
    height: 23
  }

});

export default App;
