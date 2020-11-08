import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import LoginScreen from './screens/LoginScreen'
export default class App extends React.Component {
 render (){
  return (
    <AppContainer/>
  );
}
}
const s=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Tab :{screen:AppTabNavigator}, 
  Drawer :{screen:AppDrawerNavigator},
})
const AppContainer= createAppContainer (s)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
