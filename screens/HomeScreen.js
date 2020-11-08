import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    FlatList,
    ScrollView} from 'react-native';
   import {ListItem,Icon} from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class HomeScreen extends Component{
constructor (){
  super()
  this.state ={
    userId:firebase.auth().currentUser.email,
    confessions:[]
  }
  this.request=null
}
getConfessions=()=>{
  this.request=db.collection('confessions').onSnapshot((s)=>{
    var list=s.docs.map((d)=>d.data() )
    this.setState({confessions:list})
  })
}
componentDidMount(){
  this.getConfessions()
}
key=(item,index)=>index.toString()
renderItem=({item,i})=>{
  return(<ListItem 
  key={i}
  title={item.name}
  subtitle={item.message}
  titleStyle = {{color:'voilet',fontWeight:'bold'}}
  leftElement={<Icon type='font-awesome' name='comment-dots'/>}
  />)
}
    render ()

    {return(
      <View>
      <MyHeader title='Why Sad ?' navigation={this.props.navigation}/>  
      <FlatList keyExtractor={this.key}
      data={this.state.confessions}
      renderItem={this.renderItem}
      />
      </View>
      
    )}
    
}  
