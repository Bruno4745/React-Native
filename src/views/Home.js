import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
        {/* <View style={styles.logo}>
             <Image source={require('./assets/capacete-bell-qualifier-momentum.jpg')} style={styles.logoo} />
         </View> */}
            <Text>Home</Text>
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
    welcome: {
        fontSize: 35,
        marginVertical: 20,
        fontWeight: 'bold',
        color: 'white',
    }, 
    input:{
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        width: '80%',
        backgroundColor:'#fff',
        fontSize: 15,
        borderRadius: 50,
    },
    password: {
        fontSize: 12,
        marginVertical: 10,
        color: 'white',
    },
    btn:{
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        width: '50%',
        backgroundColor:'#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})