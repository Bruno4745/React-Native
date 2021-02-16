import React from 'react'
import { createBottomTabNavigator, Ionicons } from '@react-navigation/bottom-tabs'

import Login from '../views/Login'
import Home from '../views/Home'
import Produtos from '../views/Produtos'

const routeTab = createBottomTabNavigator();

const Tab = () => {
    return (
        <routeTab.Navigator initialRouteName='Login' tabBarOptions={{
            activeTintColor: 'black',
            activeBackgroundColor: 'white',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: 'gray',
            labelStyle: {fontSize: 22} ,
        }}
        >
            <routeTab.Screen name="Login" component={Login}/>
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Produtos" component={Produtos}/>
        </routeTab.Navigator>
    )
}

export default Tab