import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'

export default class Message extends Component{
  constructor(){
    super();
    this.state={
      emailId   : '',
      name : '',
      userName  : '',
      docId     : '',
    }}
  }
