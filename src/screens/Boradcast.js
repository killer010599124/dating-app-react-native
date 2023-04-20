import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";


import Users from "../../fakedata/users.json";
import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';
const Broadcast = ({navigation}) => {
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
            
            navigation.navigate("Main");
        }, 3000);

        // clearTimeout(oneSec)
    }, []);


    return (
        <View style={{
           
        }}>
            <LinearGradient colors={['rgba(229, 58, 150, 20)', '#ff0096']} style={styles.container}>
                <ImageBackground resizeMode={'stretch'} source={require('../../Image/splash.png')} style={styles.background} />
            </LinearGradient>
            <Image
                resizeMode={'stretch'}
                source={require('../../Image/broadcast.png')}
                style={{
                    position : 'absolute',
                    alignSelf : 'center',
                    marginTop : dimension.height*0.15,
                    width:dimension.width*0.6,
                    height:dimension.width*0.6,
                    borderRadius:dimension.width*0.3,
                    borderColor : 'white',
                    
                }} />
            <Image
                resizeMode={'stretch'}
                source={require('../../Image/avatar1.jpg')}
                style={{
                    position : 'absolute',
                    alignSelf : 'center',
                    marginTop : dimension.height*0.27,
                    width:dimension.width*0.18,
                    height:dimension.width*0.18,
                    borderRadius:dimension.width*0.09,
                    borderColor : 'white',
                    borderWidth :2
                }} />
            <Text style = {{
                position : 'absolute',
                alignSelf : 'center',
                color : 'white',
                fontSize : 24,
                marginTop : dimension.height*0.5,
            }}>
                Find Nearby Friends!
            </Text>
            

            
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
    
});

export default Broadcast;