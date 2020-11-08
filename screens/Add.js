import React,{Component}from 'react';
import {
    View,
    Text,
    
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import {Input} from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'


export default class Add extends Component{
constructor(){
    super()
    this.state={
        message:'',
        name:'',
        userId:firebase.auth().currentUser.email
    }
}         
     createUniqueId(){
         return Math.random().toString().substring(7)
     }
     add=(m,n)=>{
      var id=this.createUniqueId()
        db.collection('confessions').add({
             message:m,
             name:n,
             id:id,
             userId:userId
         })
     }
    render ()
    {return(
       <View>
           <MyHeader title='Add Confession!' navigation={this.props.navigation}/>
        <Input placeholder='Express yourself here ' leftIcon={{type:'font-awesome' , name:'hand-holding-heart' }}
         onChangeText={t=>{this.setState({message:t})}} value={this.state.message}/>  
        <Input placeholder='Type your name here' leftIcon={{type:'font-awesome' , name:'signature' }}
        onChangeText={n=>{this.setState({name:n})}} value={this.state.name}/>  
        <TouchableOpacity onPress={()=>this.add(this.state.message,this.state.name)}>
            <Text>Post</Text>
            </TouchableOpacity>
        </View>
    )}
    
}