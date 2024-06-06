import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Coupons = ({ discount }) => {
  let discountImage;

  if (discount === 20) {
    discountImage = require('../../assets/Images/Off20.png');
  } else if (discount === 40) {
    discountImage = require('../../assets/Images/Off40.png');
  } else if (discount === 60) {
    discountImage = require('../../assets/Images/Off60.png');
  } else if (discount === 80) {
    discountImage = require('../../assets/Images/Off80.png');
  }

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <ImageBackground style={{ width: 345, height: 90, display: 'flex', flexDirection: 'row' }} resizeMode='cover' source={require('../../assets/Images/CouponCard.png')}>
        <View style={{ height: '100%', width: '30%', alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 33, width: 38, resizeMode: 'contain' }} source={discountImage} />
        </View>
        <View style={{ width: '70%', height: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: '#000000' }}>AMU 150</Text>
            <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 10, color: '#000000', marginTop: 3 }}>Save {discount}% on this consultation</Text>
            <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 10, color: '#00000030', marginTop: 2 }}>Valid until 01 February 2025</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 14, color: '#28643B', marginRight: 35 }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Coupons

const styles = StyleSheet.create({
  imageStyle: {
    width: '105%',
    height: 90,
    resizeMode: 'cover',
    marginBottom: 20,
  }
})
