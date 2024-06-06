import { Dimensions, Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";
const {height, width} = Dimensions.get('window')

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../../assets/Images/Search.png')} style={styles.icon} />
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    
    width: "85%",
    height: 52,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "#F0F0F0",
    paddingRight: 10,
    
  },

  icon: {
    marginLeft: 15,
    height:20,
    width:20,
  },
  input: {
    paddingLeft: 15,
    width: "90%",
    fontSize: 20,
  },
});
