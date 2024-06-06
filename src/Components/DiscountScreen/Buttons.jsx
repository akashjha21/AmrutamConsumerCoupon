import { StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { buttons } from '../../Helpers/Buttons'

const {width, height} = Dimensions.get('window')

const Buttons = ({selectColor, setSelectColor}) => {
  return (
    
        <ScrollView
        horizontal
        style={{ marginTop: 20, zIndex:2}}
        showsHorizontalScrollIndicator={false}
      >
        {buttons.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.buttons,
                selectColor === index
                  ? {
                      backgroundColor: "#EAF9EA",
                      borderWidth: 1,
                      borderColor: "#EAF9EA",
                    }
                  : {
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: "#A0A0A0",
                    },
              ]}
              onPress={() => (setSelectColor(index))}
            >
              <Text
                style={{
                  paddingHorizontal: 14,
                  fontSize: 14,
                  color: "#101018",
                  fontFamily:'Nunito-Regular',
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttons: { marginLeft: width * 0.03, marginRight:width*0.02, borderRadius: 16, height:35, justifyContent:'center', alignItems:'center', marginBottom:30, },
})