import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const RoyalGold = () => {
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
            backgroundColor: 'white',
            width: '100%',
            height: '100%'
        }}>

            {/* <Image
                style={{ borderTopLeftRadius: dimension.width * 0.05, borderTopRightRadius: dimension.width * 0.05, width: dimension.width * 0.9, height: dimension.height * 0.2, alignSelf: 'center', marginTop: 20 }}
                resizeMode={'stretch'} source={require('../../Image/royalgold.png')} /> */}
            <ImageBackground
                style={{ borderTopLeftRadius: dimension.width * 0.05, borderTopRightRadius: dimension.width * 0.05, width: dimension.width * 0.9, height: dimension.height * 0.25, alignSelf: 'center', marginTop: 20 }}
                resizeMode={'stretch'} source={require('../../Image/royalgold.png')} />
            <LinearGradient colors={['rgba(255, 255, 255, 0)', '#ffffff']} style={{ width: dimension.width * 0.9, height: dimension.height * 0.25, marginTop: 20, alignSelf: 'center', position: 'absolute' }} >
            </LinearGradient>
            <Image
                style={{ alignSelf: 'center', marginTop: -dimension.height * 0.05 }}
                source={require('../../Image/royalgold2.png')} />

            <Text
                style={{ textAlignVertical: 'top', width: dimension.width * 0.9, borderColor: '#6E7077', fontWeight: 'bold', marginLeft: dimension?.width * 0.05, marginTop: dimension?.height * 0.03, color: '#15224F', fontSize: 24, textAlign: 'center' }}>
                Like Without Limits
            </Text>
            <Text
                style={{ textAlignVertical: 'top', width: dimension.width * 0.7, alignSelf: 'center', borderColor: '#6E7077', marginLeft: dimension?.width * 0.05, marginTop: dimension?.height * 0.01, color: '#6E7077', fontSize: 18, textAlign: 'center' }}>
                With our new exciting features With our new exciting features.
            </Text>
            <View style={{marginTop : 20, flexDirection: 'row', justifyContent: 'center', alignSelf : 'center', width : dimension.width * 0.9 }}>
                <View style={{ width: dimension.width * 0.4, height: dimension.height * 0.4,  }}>
                    <Text style={{ zIndex: 10, fontSize: 18, backgroundColor: '#FFB849', color: 'white', alignSelf: 'center', textAlignVertical: 'center', textAlign: 'center', fontWeight: 'bold', width: '80%', height: dimension.height * 0.06, borderRadius: dimension.height * 0.03 }}>Most Popular</Text>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', backgroundColor: '#FFECF6', height: dimension.height * 0.28, borderRadius: dimension.height * 0.02, marginTop: -dimension.height * 0.03 }}>
                        <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', color: '#E53A96' }}>12</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', alignSelf: 'center', color: '#E53A96' }}>month</Text>
                        <Text style={{ fontSize: 20, textAlign: 'center', alignSelf: 'center', color: '#15224F' }}>$150.00</Text>
                    </View>
                </View>
                <View style={{ width: dimension.width * 0.4, height: dimension.height * 0.4, marginLeft: dimension.width * 0.05 }}>
                    <Text style={{ zIndex: 10, fontSize: 18, backgroundColor: '#FFB849', color: 'white', alignSelf: 'center', textAlignVertical: 'center', textAlign: 'center', fontWeight: 'bold', width: '80%', height: dimension.height * 0.06, borderRadius: dimension.height * 0.03 }}>Most Popular</Text>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', backgroundColor: '#FFECF6', height: dimension.height * 0.28, borderRadius: dimension.height * 0.02, marginTop: -dimension.height * 0.03 }}>
                        <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', color: '#E53A96' }}>12</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', alignSelf: 'center', color: '#E53A96' }}>month</Text>
                        <Text style={{ fontSize: 20, textAlign: 'center', alignSelf: 'center', color: '#15224F' }}>$150.00</Text>
                    </View>
                </View>
            </View>



            <View style={{ backgroundColor: 'white', height: dimension.height * 0.1, width: dimension.width * 0.8, alignSelf: 'center', position: 'absolute', marginTop: dimension.height * 0.8, borderRadius: dimension.width * 0.2, borderWidth: 0, borderColor: '#E63A96' }}>
                {/* <Button1 title={"LET'S GO"}/> */}
                <Image style={{ position: 'absolute', marginTop: -dimension.height * 0.04 }} source={require('../../Image/footer.png')}>

                </Image>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(229, 58, 150, 0.8)',
        width: '100%',
        height: '120%',

        // background: linear - gradient('180deg', rgba(229, 58, 150, 0), '#E53A96', '47.66%'),
        // borderRadius: 30
    },
    inputBox: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 15,
        fontSize: 12,
        color: '#6E7077',
        borderBottomWidth: 2,
        borderColor: 'black',
        marginVertical: 20
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },

});

export default RoyalGold;