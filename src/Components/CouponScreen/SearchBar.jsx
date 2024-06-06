import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={{marginTop:20, width:'85%', display:'flex', flexDirection:'row', alignItems:'center',height:55, borderWidth:1, borderColor:'#F0F0F0', borderRadius:16}}>
      <TextInput style={{width:'82%', paddingHorizontal:10, paddingVertical:5}} placeholder='Enter Coupon Code' />
      <TouchableOpacity><Text style={{fontFamily:'Nunito-Bold', fontSize:14, color:'#28643B'}}>Apply</Text></TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})