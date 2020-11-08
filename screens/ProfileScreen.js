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
    ScrollView} from 'react-native';
import {Avatar,Icon} from 'react-native-elements'
import * as Permissions from 'expo-Permissions'
import * as ImagePicker from 'expo-image-picker'
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class ProfileScreen extends Component{
constructor(){
  super()
  this.state={image:'#',name:'',userId:firebase.auth().currentUser.email,docId:''}
}
select=async ()=>{
  const {cancelled,uri}=await ImagePicker.lauchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.ALL,
    allowEditing:true,
    aspect=[1,1],
    quality:1,
  })
  if (!cancelled) { this.uploadImage(uri, this.state.userId); } };



uploadImage = async (uri, imageName) => {
   var response = await fetch(uri);
  var blob = await response.blob();
   var ref = firebase .storage() .ref() .child("user_profiles/" + imageName);
    return ref.put(blob).then((response) => { 
      this.fetchImage(imageName); 
    });
   };  


     fetchImage = (imageName) => {
        var storageRef = firebase .storage() .ref() .child("user_profiles/" + imageName); 
       storageRef .getDownloadURL() .then((url) => {
          this.setState({ image: url });
         }) 
          .catch((error) => {
             this.setState({ image: "#" });
             });            
            };
  getUserProfile() {
      db.collection('users')
          .where('email_id', '==', this.state.userId)
                onSnapshot((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    this.setState({
                      name: doc.data().userName ,
                      docId: doc.id,
                      image: doc.data().image,
                    });
                  });
                });
            }
            componentDidMount(){
              this.fetchImage(this.state.userId)
              this.getUserProfile()
            }
    render ()
    {return(
<View>
      <Text> ProfileScreen </Text>  
      <Avatar rounded source={{uri:this.state.image}}size={'xlarge'} onPress={()=>this.select()} showEditButton />
    <Text>{this.state.name}</Text>
  </View>
    )}
    
    
} 