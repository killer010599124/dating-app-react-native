import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const User = () => {
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
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Settings',
            uri : require('../../Image/setting.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Edit Info',
            uri : require('../../Image/edit.png')
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'My Preferences',
            uri : require('../../Image/intro.png')
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'My Queen',
            uri : require('../../Image/goldmark.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'My Offers',
            uri : require('../../Image/heart.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Invite Friends',
            uri : require('../../Image/invite.png')
        },
        
    ];
    const Item = ({ title , uri }) => (
        <View style={{ paddingTop: dimension.height * 0.01, paddingBottom: 6, flexDirection: 'row', borderBottomWidth : 0.5, borderColor : '#6E7077'  }}>
            <Image source={uri} style={{marginTop : dimension.height * 0.01, width: dimension.width * 0.1, height: dimension.width * 0.1 }} />
            <View style={{width : dimension.width * 0.6 , paddingLeft: dimension.width * 0.1, textAlignVertical: 'center', flexDirection: 'column', justifyContent: 'center' }}>

                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                
            </View>
            <Image source={require('../../Image/Icon.png')} style={{ marginVertical: dimension.width * 0.05, marginHorizontal: dimension.width * 0.1, width: dimension.width * 0.03, height: dimension.width * 0.05 }} />
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} uri = {item.uri} />
    );

    return (
        <View style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%'
        }}>
            <View style = {{backgroundColor : '#F7FBFE', width : '100%', height : dimension.height * 0.35}}>
                <Image
                    style={{ borderRadius: dimension.width * 0.1,  width: dimension.width * 0.2, height: dimension.width * 0.2, alignSelf: 'center', marginTop: 20 }}
                    resizeMode={'stretch'} source={require('../../Image/avatar1.jpg')} />
                <Text
                    style={{ textAlignVertical: 'top', width: dimension.width * 0.9, borderColor: '#6E7077', fontWeight: 'bold', marginLeft: dimension?.width * 0.05, marginTop: dimension?.height * 0.02, color: '#15224F', fontSize: 24, textAlign: 'center' }}>
                    Azzahri, 25
                </Text>
                <Text
                    style={{ textAlignVertical: 'top', width: dimension.width * 0.9, borderColor: '#6E7077', fontWeight: 'bold', marginLeft: dimension?.width * 0.05,  color: '#6E7077', fontSize: 14, textAlign: 'center' }}>
                    Sukabumi, Indonesia
                </Text>
                <TouchableOpacity>
                <Image
                    style={{  alignSelf: 'center', marginTop: 20, width : dimension.width * 0.5, height : dimension.height * 0.07 }}
                    resizeMode={'stretch'} source={require('../../Image/level.png')} />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{  width: dimension.width * 0.9, height: dimension.height * 0.45, alignSelf: 'center' }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
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

export default User;