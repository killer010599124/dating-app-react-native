import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { Colors } from "../constants";
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
const SocialConnect = () => {
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
        <View>
            <Text style = {{...styles.loginText, marginTop:dimension.height*0.2}}>
                ----------You can connect with-----------
            </Text>
            <View style={{...styles.container, marginTop:dimension.height*0.28}}>
                <Image source={require('../../Image/facebook.png')} style = {styles.facebook}  />
                <Image source={require('../../Image/google.png')}  style = {styles.google}/>
                <Image source={require('../../Image/linkedin.png')}  style = {styles.linkedin}/>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        
        alignSelf: 'center',
        alignItems: 'center',

    },
    loginScreenButton: {
        alignSelf: 'center',
        backgroundColor: '#E63A96',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E63A96',
        textAlign: 'center',
        alignItems: 'center'
    },
    loginText: {
        position : 'absolute',
        color: 'gray',
        textAlign: 'center',
        alignSelf : 'center',
    },
    facebook:{
        width:75,
        height:75,
        
    },
    google:{
        width:60,
        height:60,
        marginLeft:10
    },
    linkedin:{
        width:60,
        height:60,
        marginLeft:20
    }
});
export default SocialConnect;
