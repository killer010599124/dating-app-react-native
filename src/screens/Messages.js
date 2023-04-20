import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const Messages = ({ navigation }) => {
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
            title: 'First Item',

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },

    ];
    const Item = ({ title }) => (
        <View >
            <TouchableOpacity
                style={{ paddingTop: dimension.height * 0.02, paddingBottom: 6, flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#6E7077' }}
                onPress={() =>{navigation.navigate('ChatField')}}
           >
                <Image source={require('../../Image/avatar1.jpg')} style={{ borderRadius: dimension.width * 0.075, width: dimension.width * 0.15, height: dimension.width * 0.15 }} />
                <View style={{ paddingLeft: 10, textAlignVertical: 'center', paddingVertical: 5, flexDirection: 'column', justifyContent: 'space-between' }}>

                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Royaltydating

                    </Text>
                    <Text style={{ color: '#6E7077' }}>Welcome to Royaltydating</Text>

                </View>
                <Text style={{ color: '#6E7077', marginLeft: dimension.width * 0.15, marginTop: dimension.height * 0.05 }}>28 min ago</Text>

            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%'
        }}>


            <SafeAreaView style={{ paddingTop: 20, width: dimension.width * 0.9, height: dimension.height * 0.8, alignSelf: 'center' }}>
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

export default Messages;