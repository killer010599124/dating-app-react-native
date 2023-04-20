import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Switch, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const Preferences = () => {
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
    const Item = ({ title, }) => {
        const [toggle, setToggle] = useState(false);
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Text style={{ color: '#0E0D0D', fontSize: 20, textAlign: 'center', textAlignVertical: 'center' }}>
                    {title}
                </Text>
                <Switch
                    trackColor={{ false: '#6E7077', true: '#F35BAC', alignItems: 'center' }}

                    thumbColor="#F35BAC"
                    ios_backgroundColor="gray"
                    onValueChange={value => setToggle(value)}
                    value={toggle}
                    style={{ width: 80, height: 50 }}
                />
            </View>
        )
    }

    return (
        <View style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%'
        }}>

            <View style={{ marginTop: dimension.height * 0.03, width: dimension.width * 0.9, alignSelf: 'center', borderBottomWidth: 0.5, borderColor: '#6E7077' }}>

                <Item title={'Men'} />
                <Item title={'Women'} />
            </View>
            <View style={{ marginTop: dimension.height * 0.03, alignSelf: 'center', height: dimension.height * 0.1, width: dimension.width * 0.9, }}>
                <Text style={{ color: '#6E7077', textAlignVertical: 'center', textAlign: 'left' }}>Age</Text>
                <Slider
                    style={{ height: 40, width: dimension.width * 0.9, }}
                    minimumValue={0}
                    maximumValue={10}
                    width={5}
                    minimumTrackTintColor="#E63A96"
                    maximumTrackTintColor="#000000"
                    thumbImage={require('../../Image/Oval.png')}
                    thumbTintColor="#E63A96"
                />
                <View style={{ flexDirection: 'row', width: dimension.width * 0.9, alignSelf: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#6E7077', textAlignVertical: 'center',  }}>18</Text>
                    <Text style={{ color: '#6E7077', textAlignVertical: 'center',  }}>60</Text>
                </View>
                <Text style={{marginTop : dimension.height * 0.03, color: '#6E7077', textAlignVertical: 'center', textAlign: 'left' }}>Distance</Text>
                <Slider
                    style={{ height: 40, width: dimension.width * 0.9, }}
                    minimumValue={0}
                    maximumValue={10}
                    width={5}
                    minimumTrackTintColor="#E63A96"
                    maximumTrackTintColor="#000000"
                    thumbImage={require('../../Image/Oval.png')}
                    thumbTintColor="#E63A96"
                />
                <View style={{ flexDirection: 'row', width: dimension.width * 0.9, alignSelf: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#6E7077', textAlignVertical: 'center',  }}>0Km</Text>
                    <Text style={{ color: '#6E7077', textAlignVertical: 'center',  }}>10Km</Text>
                </View>
            </View>
            <View style={{ marginTop: dimension.height * 0.2, width: dimension.width * 0.9, alignSelf: 'center', borderBottomWidth: 0.5, borderColor: '#6E7077' }}>
                <Text style={{ color: '#F35BAC', fontSize: 18, fontWeight: 'bold', paddingBottom: dimension.height * 0.02 }}>
                    More Privacy Controls
                </Text>
                <Item title={'Hide my age'} />
                <Item title={'Hide my online status'} />
                <Item title={'Hide my distance'} />
            </View>
            <View style={{ position: 'absolute', marginTop: dimension.height * 0.72, alignSelf: 'center' }}>

                <Button title={'Add Preference'} />
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


});

export default Preferences;