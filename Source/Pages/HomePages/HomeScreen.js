import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../Constants/AppColors'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../Constants/Typographies'
import DropShadow from 'react-native-drop-shadow'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        {/* Header Start */}
        <View style={styles.header}>
            <View style={styles.infoContainer}>
                <DropShadow
                 style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,

                    elevation: 3,
                }}
                >
                <Pressable style={styles.avatarContainer}>
                    <FastImage source={require('../../Images/img_avatar.jpg')} style={{width:'100%', height:'100%'}} resizeMode={FastImage.resizeMode.cover}></FastImage>
                </Pressable>
                </DropShadow>
               
                <View style={{width:'60%', marginStart:15}}>
                    <Text style={[Typographies.h4, {color:AppColors.primary_black}]}>raiko</Text>
                    <Text style={{marginTop:4}}>Just a normal weeb!</Text>
                </View>
            </View>
            <Pressable>
                <FastImage source={require('../../Images/ic_option.png')} style={{width:47, height:47}} resizeMode={FastImage.resizeMode.contain}></FastImage>
            </Pressable>
        </View>
          {/* Header End */}
        {/* Search Bar Start */}
        <DropShadow
         style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
        }}
        
        >

        <View style={styles.searchBarContainer}>
            <View style={styles.seachBarLeft}>
            <FastImage source={require('../../Images/ic_search.png')} style={{width:18, height:19, marginEnd:12}} resizeMode={FastImage.resizeMode.contain}></FastImage>
            <TextInput style={{flex:1, paddingStart:10}} placeholder='Search Manga'></TextInput>
            </View>
           <Pressable style={styles.searchBarRight}>
            <FastImage source={require('../../Images/ic_configure.png')} style={{width:20, height:10}} resizeMode={FastImage.resizeMode.contain}></FastImage>
           </Pressable>
        </View>
        </DropShadow>
          {/* Search Bar End */}
    
    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingEnd:15}}>
        <Text style={[Typographies.h4,{color: AppColors.primary_black}]}>Trending Manga</Text>
        <Pressable>
            <FastImage source={require('../../Images/ic_3dots.png')} style={{width:20, height:10}} resizeMode={FastImage.resizeMode.contain}></FastImage>
        </Pressable>
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppColors.primary_white,
        paddingStart:33,
        paddingEnd:22,
        paddingTop:14
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    infoContainer:{
        flexDirection:'row',
        alignItems:'center'
    },  
    avatarContainer:{
        width:70,
        height:70,
        borderRadius:50,
        overflow:'hidden'
    },
    searchBarContainer: {backgroundColor:AppColors.primary_white, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:24, borderRadius:25},
    seachBarLeft:{flexDirection:'row', flex:1, alignItems:'center', paddingStart:20},
    searchBarRight:{paddingEnd:20},

})