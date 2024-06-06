import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NavBar = ({navigation}) => {
  return (
    <ImageBackground style={styles.mainContainer} source={require('../../assets/Images/NavBar.png')}>
      <View style={styles.cartText}>
        <Text>Your cart:$200</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('DiscountScreen')} style={{position:'absolute', top:20, left:5}}>
        <Image style={{height:50, width:50}} source={require('../../assets/Images/LeftArrow.png')}  />
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default NavBar

const styles = StyleSheet.create({
    mainContainer: {
        height:190,
        width:'100%',
        resizeMode:'contain'
    },
    cartText:{
        position:'absolute',
        top:130,
        left:18,
        fontFamily:'Poppins-Regular',
        fontSize:13,
        color:'#646665'

    }
})