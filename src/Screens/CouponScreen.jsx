import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import NavBar from '../Components/CouponScreen/NavBar'
import SearchBar from '../Components/CouponScreen/SearchBar'
import Coupons from '../Components/CouponScreen/Coupons'

const CouponScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <NavBar navigation={navigation} />
      <SearchBar />
      <View style={{alignItems:'flex-start', width:'100%', paddingHorizontal:25}}>
      <Text style={{color:'#000000', marginVertical:30}}>Best Coupons</Text>
      <Coupons discount={20} />
      <Coupons discount={40} />
      <Coupons discount={60} />
      <Coupons discount={80} />
      </View>
    </View>
  )
}

export default CouponScreen

const styles = StyleSheet.create({
    mainContainer: {
        height:'100%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
    },
})