import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";


import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';
const Membership = () => {
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
        <View style={{
           
        }}>
            <LinearGradient colors={['rgba(229, 58, 150, 20)', '#ff0096']} style={styles.container}>
                <ImageBackground resizeMode={'stretch'} source={require('../../Image/splash.png')} style={styles.background} />
            </LinearGradient>
            <Image
                resizeMode={'stretch'}
                source={require('../../Image/logo.png')}
                style={{
                    position : 'absolute',
                    alignSelf : 'center',
                    marginTop : dimension.height*0.2,
                    width:dimension.width*0.3,
                    height:dimension.width*0.3,
                   
                }} />
            <Text style = {{
                position : 'absolute',
                alignSelf : 'center',
                color : 'white',
                fontSize : 24,
                textAlign : 'center',
                width:dimension.width*0.8,
                marginTop : dimension.height*0.4,
            }}>
                You can join your friends and get 25% discount off membership
            </Text>
            <Text style = {{
                position : 'absolute',
                alignSelf : 'center',
                color : 'white',
                fontSize : 18,
                textAlign : 'center',
                width:dimension.width*0.8,
                marginTop : dimension.height*0.55,
            }}>
               You've got an amazing story now you are in Royaltydating soon tell us what you're looking for in your future partner.
            </Text>
            <View style = {{alignSelf : 'center',position : 'absolute',marginTop:dimension.height*0.8}}>
                <Button1 title={"REFER PEOPLE!"}/>
            </View>
            
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

export default Membership;