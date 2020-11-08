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

export default class SettingScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId   : '',
      name : '',
      userName  : '',
      docId     : '',
    }
  }

  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('emailId','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.emailId,
          name      : data.name,
          userName  : data.userName,
          docId     : doc.id
        })
      });
    })
  }

  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId)
    .update({
      "name"      : this.state.name,
      "userName" : this.state.userName,
    })

    Alert.alert("Profile Updated Successfully")

  }

  componentDidMount(){
    this.getUserDetails()
  }


  render(){
    return(
      <View style={styles.container} >
        <MyHeader title="Settings" navigation={this.props.navigation}/>
        <View style={styles.formContainer}>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  name: text
                })
              }}
              value ={this.state.firstName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  userName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.updateUserDetails()
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#fff"
  }
})