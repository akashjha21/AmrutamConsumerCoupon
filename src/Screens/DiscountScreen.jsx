import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import NavBar from '../Components/DiscountScreen/NavBar';
import SearchBar from '../Components/DiscountScreen/SearchBar';
import Buttons from '../Components/DiscountScreen/Buttons';
import Card from '../Components/DiscountScreen/ChatProfile';
import { ProfileDetails } from '../Helpers/ProfileDetails';
const {width, height} = Dimensions.get('window');

const DiscountScreen = () => {
  const [selectColor, setSelectColor] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <NavBar />
      <SearchBar />

      <Buttons selectColor={selectColor} setSelectColor={setSelectColor} />

      <ScrollView style={{marginTop: 10, width: '100%', paddingHorizontal: 16}}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight:'700',
            color: '#000000',
            marginTop: 16,
            marginBottom: 20,
          }}>
          Ultimate Discounts
        </Text>

        <ScrollView horizontal style={{marginTop: 6}} showsHorizontalScrollIndicator={false}>
          {(ProfileDetails).map((item, index) => {
            return <Card key={index} name={item.name} years={item.years} type={item.type} stars={item.stars} />;
          })}
        </ScrollView>

        <Text
          style={{
            fontFamily: 'DM Sans',
            fontWeight:'700',
            fontSize: 16,
            color: '#000000',
            marginTop: 16,
            marginBottom: 20,
          }}>
          Video Call Discounts
        </Text>

        <ScrollView horizontal style={{marginTop: 6}} showsHorizontalScrollIndicator={false}>
          {(ProfileDetails).map((item, index) => {
            return <Card key={index} name={item.name} years={item.years} type={item.type} stars={item.stars} />;
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default DiscountScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
