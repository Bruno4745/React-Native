import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const limpar = () => {
        setEmail('');
        setSenha('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={text=>setEmail(text)} value={email}/>
            <TextInput style={styles.input} placeholder="Digite sua senha"  onChangeText={text=>setSenha(text)} value={senha}
            secureTextEntry={true}/>
            <Text style={styles.password}>Esqueceu a senha?</Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>limpar()}>
                <Text>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161c2d',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    titulo: {
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