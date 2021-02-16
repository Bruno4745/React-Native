import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Capacete Bell Qualifier',
    preco: 'R$ 699,00',
    img: 'capa-qualifier.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Capacete Bell Star Pace',
    preco: 'R$ 2.799,00',
    img: 'capa-star-pace.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Capacete Suomy SR-Sport',
    preco: 'R$ 3.299,00',
    img: 'capa-suomy.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Capacete KYT NX Race',
    preco: 'R$ 2.399,00',
    img: 'capa-kyt.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Macacao Revit Argon',
    preco: 'R$ 7.390,00',
    img: 'macacao-argon.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Macacao Revit HyperSpeed',
    preco: 'R$ 8.990,00',
    img: 'macacao-hyper.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Luva Revit League',
    preco: 'R$ 1.390,00',
    img: 'luva-league.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Luva Revit Jerez 3',
    preco: 'R$ 2.690,00',
    img: 'luva-jerez.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Bota Forma Ice Pro',
    preco: 'R$ 2.090,00',
    img: 'bota-forma.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Capacete Shark Spartan',
    preco: 'R$ 3.899,00',
    img: 'capa-shark.png',
  },
];

const Item = ({ title, preco, img }) => (
    <View style={styles.item}>
        <Image source={require(`../../assets/${img}`)} style={styles.imagem}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.preco}>{preco}</Text>
    </View>
);

const Produtos = () => {

    const renderItem = ({ item }) => (
        <View>
            <Item title={item.title} preco={item.preco} img={item.img}/>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Lista de Produtos</Text>
            <FlatList style={styles.lista}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default Produtos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161c2d',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    imagem: {
        width: 150,
        height: 150,
    },
    titulo: {
        fontSize: 35,
        marginVertical: 20,
        fontWeight: 'bold',
        color: 'white',
    }, 
    lista: {
        width: "80%",
    },
    item: {
        backgroundColor: '#d9e2ef',
        padding: 20,
        width: "100%",
        marginVertical: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Arial',
    },
    preco: {
        fontSize: 16,
        fontFamily: 'Arial',
    },
});