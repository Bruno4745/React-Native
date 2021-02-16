import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Tab from './Tab'

const index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <NavigationContainer>
                <Tab />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})