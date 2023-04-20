import React, { useEffect, useState, useRef, useCallback } from 'react';
import {Alert, View, Image, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";


import Users from "../../fakedata/users.json";
import { LinearGradient } from 'expo-linear-gradient';

const Splash = ({navigation}) => {
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
    useEffect(() => {

        var oneSec = setTimeout(() => {
            
            navigation.navigate("Introduction");
        }, 2000);

        // clearTimeout(oneSec)
    }, []);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <LinearGradient colors={['rgba(229, 58, 150, 0)', '#ff0096']} style={styles.container}>
                <ImageBackground resizeMode={'stretch'} source={require('../../Image/splash.png')} style={styles.background} />
            </LinearGradient>
            <ImageBackground
                resizeMode={'stretch'}
                source={require('../../Image/logo.png')}
                style={{
                    position : 'absolute',
                    marginTop : dimension.height * 0.4,
                    width:dimension.width*0.3,
                    height:dimension.height*0.15
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        // background: linear - gradient('180deg', rgba(229, 58, 150, 0), '#E53A96', '47.66%'),
        // borderRadius: 30
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    logo: {
        position: 'absolute',
        width: '60%',
        height: '40%',
        alignSelf: 'center'
    }
});

export default Splash;