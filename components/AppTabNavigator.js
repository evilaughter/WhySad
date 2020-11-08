import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Icon}from 'react-native-elements'
import ProfileScreen from '../screens/ProfileScreen'
import Add from '../screens/Add'

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon :<Icon name='home' type='font-awesome' color='#000000' size ={22}/>, 
      tabBarLabel : "home",
    } ,
    Add:{screen:Add,
      tabBarIcon :<Icon name='plus-square' type='font-awesome' color='#000000' size ={22}/>, 
      tabBarLabel : "Share",
    },
    
  ProfileScreen: {
    screen:ProfileScreen,
    tabBarIcon :<Icon name='user-circle' type='font-awesome' color='#000000' size ={22}/>, 
      tabBarLabel : "Profile",
     },
  

  },
 
});