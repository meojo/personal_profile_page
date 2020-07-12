import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Ionicons name="md-arrow-back" size={30} color="rgb(51,60,87)" />
      <Entypo name="grid" size={30} color="rgb(51,60,87)" />
      </View>
      <View style={styles.profile}>
        <View style={{margin: 10}}>
          <Image source={require("./assets/me_1.jpg")} style={styles.avatar} resizeMode="cover"/>
        </View>
        <View style={{margin: 5}}>
          <Text style={{fontSize: 22, fontWeight:'bold', marginTop: 5, marginBottom: 5}}>Nguyễn Viết Thành</Text>
          <Text style={{fontSize: 17, color:POLO_BLUE_COLOR, marginTop: 5, marginBottom: 5}}>Developer</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button1} onPress={() => alert('followed')}>
              <Text style={{textAlign:'center', fontWeight:'bold', color:'white', fontSize: 15}}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => alert('message sended')}>
              <Ionicons name="md-send" size={24} color="white" style={{alignSelf:'center'}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.statistical}>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 17, fontWeight:'bold'}}>420</Text>
          <Text style={{color:POLO_BLUE_COLOR}}>Photos</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 17, fontWeight:'bold'}}>96K</Text>
          <Text style={{color:POLO_BLUE_COLOR}}>Followers</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 17, fontWeight:'bold'}}>8008</Text>
          <Text style={{color:POLO_BLUE_COLOR}}>Following</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
        <View style={{flexDirection:'column'}}>
          {imgData.slice(0, centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image}/>
          })}
        </View>
        <View style={{flexDirection:'column'}}>
          {imgData.slice(centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image}/>
          })}
        </View>      
      </ScrollView>
      <View style={styles.bar }>
        <Ionicons name="md-funnel" size={24} color="black" />
        <Ionicons name="ios-add-circle-outline" size={24} color="black" />
        <MaterialIcons name="person-outline" size={24} color="black" />
      </View>
    </View>
  );
}
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/me_2.jpg') },
  { id: 2, imgSource: require('./assets/me_3.jpg') },
  { id: 3, imgSource: require('./assets/me_4.jpg') },
  { id: 4, imgSource: require('./assets/me_5.jpg') },
  { id: 5, imgSource: require('./assets/me_6.jpg') },
  { id: 6, imgSource: require('./assets/me_7.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginBottom: 10
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profile: {
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  buttonView:{
    flexDirection: 'row',
    marginTop: 10
  },
  button1: {
    backgroundColor:FOLLOW_COLOR,
    borderRadius: 25,
    marginRight: 8,
    height: 35,
    width: 120,
    paddingTop: 4,
  },
  button2 : {
    backgroundColor:SEND_MESSAGE_COLOR,
    borderRadius: 25,
    height: 35,
    width: 60,
    paddingTop: 4,
  },
  statistical: {
    justifyContent:'space-around', 
    flexDirection:'row', 
    marginTop: 10, 
    marginBottom: 10
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 20,
    margin: 10
  },
  bar: {
    marginTop: 15,
    flexDirection:'row',
    justifyContent:'space-around'
  }
});