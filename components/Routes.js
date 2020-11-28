import React from 'react'
import Blogs from './Blogs'
import Post from './Post'
import Edit from './Edit'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


const NavStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Blogs" component={Blogs}/>
            <Stack.Screen name="Edit" component={Edit}/>
        </Stack.Navigator>
    )
}

const BottomTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="NavStack" component={ NavStack } />
            <Tab.Screen name="Post" component={ Post } />
        </Tab.Navigator>
    )
}
export default BottomTab