import { StyleSheet } from 'react-native';
import React from 'react';
import CouponScreen from './src/Screens/CouponScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DiscountScreen from './src/Screens/DiscountScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={CouponScreen} name='CouponScreen' />
        <Stack.Screen component={DiscountScreen} name='DiscountScreen' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})