import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Like from '../img/like.png';
import Likeada from '../img/likeada.png';
import Send from '../img/send.png';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };
        this.mostrarLikes = this.mostrarLikes.bind(this);
        this.like = this.like.bind(this);
        this.icone = this.icone.bind(this);
    }
    icone(likeada) {
        return likeada ? require('./../img/likeada.png') :
            require('./../img/like.png')
    }
    like() {
        let feed = this.state.feed

        if (feed.likeada == true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }
    }
    mostrarLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers <= 0) {
            return;
        }

        return (
            <Text style={styles.likers}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewperfil}>
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.fotoperfil}
                    ></Image>
                    <Text
                        style={styles.nomeusuario}>
                        {this.state.feed.nome}
                    </Text>
                </View>

                <Image
                    resizeMode='cover'
                    source={{ uri: this.state.feed.imgPublicacao }}
                    style={styles.img1}
                />

                <View style={styles.segundaview}>
                    <TouchableOpacity
                        onPress={this.like}
                    >
                        <Image

                            style={styles.like}
                            source={this.icone(this.state.feed.likeada)}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.send1}
                            source={Send}
                        ></Image>
                    </TouchableOpacity>
                </View>
                {this.mostrarLikes(this.state.feed.likers)}


                <View style={styles.rodape}>
                    <Text style={styles.nome}>{this.state.feed.nome}</Text>
                    <Text style={styles.descricao}>{this.state.feed.descricao}</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    viewperfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,


    },
    fotoperfil: {
        height: 50,
        width: 50,
        borderRadius: 40,
    },
    nomeusuario: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 8,


    },
    imagem: {
        flex: 1,
        alignItems: 'center',

    },
    img1: {
        flex: 1,
        height: 400,
        alignItems: 'center',

    },
    segundaview: {
        flexDirection: 'row',
        padding: 5
    },
    like: {
        height: 33,
        width: 33,


    },
    send1: {
        height: 33,
        width: 33,
        paddingLeft: 5,
        marginLeft: 5,
    },
    rodape: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5

    },
    descricao: {
        paddingLeft: 5,
        fontSize: 15,
    },
    likers: {
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default Lista;