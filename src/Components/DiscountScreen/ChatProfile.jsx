import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const Card = ({name, type, years, stars}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Images/ProfilePic.png')} // Replace with your image URL
            style={styles.image}
          />
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{stars}</Text>
            <Text style={styles.starText}>⭐</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 24, height: 24, resizeMode: 'contain'}}
              source={require('../../assets/Images/Experience.png')}
            />
            <Text
              style={{
                fontFamily: 'Nunito-Regular',
                fontSize: 16,
                color: '#0C0C0C',
                marginLeft: 5,
              }}>
              {years} years of experience
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              width: 186,
              height: 35,
              borderRadius: 18,
              backgroundColor: '#3A643B12',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 20, height: 18, resizeMode: 'contain'}}
              source={require('../../assets/Images/Pin.png')}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Nunito-SemiBold',
                color: '#3A643B',
                marginLeft: 6,
              }}>
              {type} +4
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#3A643B',
              width: 190,
              height: 38,
              borderRadius: 8,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                fontSize: 14,
                color: '#FFFFFF',
              }}>
              View Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 5,
    marginRight:20,
    marginVertical: 35,
  },
  card: {
    width: 224,
    backgroundColor: '#FFFAF0',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    elevation:1
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 50,
    position: 'absolute',
    top: -50,
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 3.5,
    borderRadius: 16,
    position: 'absolute',
    top: 30,
    alignItems:'center'
  },
  ratingText: {
    color: 'white',
    fontSize: 16,
    fontFamily:'Nunito-Regular'
  },
  starText: {
    color: 'gold',
    fontSize: 14,
    marginLeft: 5,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: '#000000',
    marginBottom: 5,
  },
  experience: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#0C0C0C',
    marginBottom: 10,
  },
  specializationContainer: {
    backgroundColor: '#EAF9EA',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  specializationText: {
    color: '#4CAF50',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Card;
