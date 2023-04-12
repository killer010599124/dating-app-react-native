import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, Switch, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const Settings = () => {
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems : 'center',  }}>
                <Text style={{ color: '#0E0D0D', fontSize: 20, textAlign : 'center', textAlignVertical : 'center' }}>
                    {title}
                </Text>
                <Switch
                    trackColor={{ false: '#6E7077', true: '#F35BAC', alignItems : 'center' }}
                    
                    thumbColor="#F35BAC"
                    ios_backgroundColor="gray"
                    onValueChange={value => setToggle(value)}
                    value={toggle}
                    style = {{width :80,height : 50 }}
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
            <View style={{  marginTop: dimension.height * 0.03, width: dimension.width * 0.9, alignSelf: 'center',borderBottomWidth : 0.5,borderColor : '#6E7077'  }}>
                <Text style={{ color: '#F35BAC', fontSize: 18, fontWeight: 'bold', paddingBottom : dimension.height * 0.02 }}>
                    Notification
                </Text>
                <Item title={'Message'} />
                <Item title={'Like'} />
                <Item title={'Other Notifications'} />
            </View>

            <View style={{  marginTop: dimension.height * 0.03, width: dimension.width * 0.9, alignSelf: 'center', borderBottomWidth : 0.5,borderColor : '#6E7077'  }}>
                <Text style={{ color: '#F35BAC', fontSize: 18, fontWeight: 'bold', paddingBottom : dimension.height * 0.02 }}>
                    Connected Accounts
                </Text>
                <Item title={'Instagram'} />
                <Item title={'Fackbook'} />
            </View>
            <View style={{marginTop: dimension.height * 0.03,flexDirection: 'column', justifyContent: 'space-between',width: dimension.width * 0.9, borderBottomWidth : 0.5,borderColor : '#6E7077' , alignSelf : 'center'  }}>
                <Text style={{ color: '#6E7077', fontSize: 14,  textAlignVertical : 'center' }}>
                    Distance Unit
                </Text>
                <Text style={{ color: '#0E0D0D', fontSize: 20,  textAlignVertical : 'center', paddingVertical : 5 }}>
                    Miles
                </Text>
            </View>
            <View style={{  marginTop: dimension.height * 0.03, width: dimension.width * 0.9, alignSelf: 'center',   }}>
                <Text style={{ color: '#F35BAC', fontSize: 18, fontWeight: 'bold', paddingBottom : dimension.height * 0.02 }}>
                    Legal
                </Text>
                <Item title={'Tearms and conditions of use'} />
                <Item title={'Privacy Policy'} />
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

export default Settings;