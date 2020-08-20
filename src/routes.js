import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Navigation } from 'react-native-navigation';

const Drawer = createDrawerNavigator();

import Main from './pages/main';
import SideMenu from './pages/sideMenu';

import { SideMenuContent } from './components/sideMenuContent';

export default function Routes(){
    Navigation.registerComponent('Main', () =>
                gestureHandlerRootHOC(Main));
    return(
        <NavigationContainer>
            <Drawer.Navigator 
            drawerContent={props => <SideMenuContent {...props} />}
            initialRouteName="Main"
            >
                <Drawer.Screen name="Main" component={Main} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}