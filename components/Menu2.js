import axios from 'axios'
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import {RFValue} from 'react-native-responsive-fontsize'
import firebase from 'firebase';

import db from '../config';
export default class Menu2 extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View> </View>
    );
  }
}
var styles = StyleSheet.create({
  drawerItemsContainer: {
    flex: 0.8,
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  logOutButton: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    flex: 0.75,
    width: '40%',
    height: '20%',
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 40,
  },
});
