import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../assets/home.png')} style={styles.image} />
            </View>
            <Text style={styles.titulo}>Seja Bem-Vindo</Text>
            <Text style={styles.texto}>Trabalhamos com a venda de equipamentos e acessórios para motos das melhores marcas e produtos do mercado, reconhecidos mundialmente, garantindo ao motociclista conforto, qualidade, segurança e agilidade na entrega do pedido.</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Produtos')}>
                <Text>Conheça nossos produtos!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161c2d',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    image: {
        width: '100vw',
        height: '30vh',
        marginBottom: 20,
    },
    titulo: {
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white',
    }, 
    texto: {
        fontSize: 18,
        marginBottom: 20,
        color: 'white',
    },
    btn:{
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        width: '60vw',
        backgroundColor:'#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})