import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';
import{Icon} from 'react-native-elements';
import Menu from './Menu'; 

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator ,
    navigationOptions:{drawerIcon:<Icon type="font-awesome" name='home'/>, drawerLabel:'Home'}
    },
    Setting : {screen : SettingScreen ,
      navigationOptions:{drawerIcon:<Icon type="font-awesome" name='user-cog'/>,drawerLabel:'Settings'}
    }
},
  {
    contentComponent:Menu
  },
  {
    initialRouteName : 'Home'
  })