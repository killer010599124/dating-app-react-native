import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";


import Users from "../../fakedata/users.json";
import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';
const SendingPhoto = ({navigation}) => {
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
                source={require('../../Image/avatar1.jpg')}
                style={{
                    position : 'absolute',
                    alignSelf : 'center',
                    marginTop : dimension.height*0.15,
                    width:dimension.width*0.4,
                    height:dimension.width*0.4,
                    borderRadius:dimension.width*0.2,
                    borderColor : 'white',
                    borderWidth : 5
                }} />
            <Text style = {{
                position : 'absolute',
                alignSelf : 'center',
                color : 'white',
                fontSize : 30,
                marginTop : dimension.height*0.4,
            }}>
                Great!
            </Text>
            <Text style = {{
                position : 'absolute',
                alignSelf : 'center',
                textAlign : 'center',
                color : 'white',
                width : dimension.width*0.7,
                fontSize : 18,
                marginTop : dimension.height*0.5,
            }}>
                "You've got an amazing story now you are in Royaltydating soo tell us what you're looking for in your future partner.
            </Text>
            <View style = {{alignSelf : 'center',position : 'absolute',marginTop:dimension.height*0.8}}>
                <Button1 title={"LET'S GO"} onPress={() =>{navigation.navigate('Broadcast')}}  />
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

export default SendingPhoto;