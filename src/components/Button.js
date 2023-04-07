import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { Colors } from "../constants";
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
const Button = ({ title,  }) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      //   Dimensions.removeEventListener('change', onChange);
    };
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.loginScreenButton, marginTop: dimension.height * 0.02, width: dimension.width * 0.8, height: dimension.height * 0.07, borderRadius: dimension.height * 0.035 }}
        // onPress={() => navigate('HomeScreen')}
        underlayColor='#fff'>
        <Text style={styles.loginText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loginScreenButton: {
    alignSelf : 'center',
    backgroundColor: '#E63A96',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E63A96',
    textAlign: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10
  }
});
export default Button;
