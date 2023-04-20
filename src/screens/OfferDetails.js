import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const OfferDetails = () => {
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


            <View style={{ paddingHorizontal: dimension.width * 0.1, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', width: dimension.width * 0.9, marginTop: dimension.height * 0.1 }}>

                <View style={{ textAlignVertical: 'center', flexDirection: 'column', justifyContent: 'center' }}>

                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Bookmyshow</Text>
                    <Text style={{ color: '#E53A96', fontSize: 12, fontWeight: 'bold' }}>Movie tickets</Text>
                    <Text style={{ color: '#E53A96', fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>50% Cash Back</Text>
                    <Text style={{ color: '#6E7077' }}>For couple enter only</Text>
                </View>

                <Image source={require('../../Image/qr.png')} style={{ width: dimension.width * 0.25, height: dimension.width * 0.25 }} />
            </View>
            <View style={{paddingBottom : 10, borderBottomWidth : 0.5, borderColor : '#6E7077', marginTop: dimension.height * 0.05, flexDirection: 'row', justifyContent: 'space-between', width: dimension.width * 0.8, alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: dimension.width * 0.12 }}>
                    <TouchableOpacity><Image source={require('../../Image/save.png')} style={{ width: 25, height: 25, }} /></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../Image/share.png')} style={{ marginTop: 3, width: 22, height: 22 }} /></TouchableOpacity>
                </View>
            </View>
            <Text style={{ color: '#6E7077', width: dimension.width * 0.8, alignSelf: 'center', marginTop: dimension.height * 0.05 }}>
                With our new exciting features 
                {'\n'}
            </Text>
            <View style={{marginTop : dimension.height * 0.07}}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', textAlign : 'center' }}>Coupon Code</Text>
                <Text style={{ color: '#E53A96', fontSize: 36, fontWeight: 'bold', textAlign : 'center' }}>Flat 50</Text>
                <Button title={'BUY NOW'}/>
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

export default OfferDetails;