import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';
import{Icon} from 'react-native-elements'; 
import Message from '../screens/Message'
import Menu2 from './Menu2';
export const AppDrawerNavigator2 = createDrawerNavigator({
 
  Home : {
    screen : AppTabNavigator ,
    navigationOptions:{drawerIcon:<Icon type="font-awesome" name='home'/>, drawerLabel:'Home'}
    }, 
  Message : {screen : Message ,
      navigationOptions:{drawerIcon:<Icon type="font-awesome" name='comments'/>,drawerLabel:'Chats'}
    }
},
  {
    contentComponent:Menu2
  },
  {
    initialRouteName : 'Home'
  })