import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Navigation } from 'react-native-navigation';
const AppStack = createStackNavigator();

import Main from './pages/main';

export default function Routes(){
    Navigation.registerComponent('Main', () =>
                gestureHandlerRootHOC(Main));
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions= {{ headerShown: false }}>
               <AppStack.Screen name="Main" component={Main} />
               
            </ AppStack.Navigator>
        </NavigationContainer>
    );
}