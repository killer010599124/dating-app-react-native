import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

const SearchResults = () => {
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
        <View style={{ paddingTop: dimension.height * 0.03,paddingBottom : 6, flexDirection: 'row', borderBottomWidth : 0.5, borderColor : '#6E7077' }}>
            <Image source={require('../../Image/Card.png')} style={{ width: dimension.width * 0.15, height: dimension.width * 0.15 }} />
            <View style={{ paddingLeft: 10, textAlignVertical: 'center', flexDirection: 'column', justifyContent: 'center' }}>

                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Fashion</Text>
                <Text style={{ color: '#6E7077' }}>3330 offers</Text>
            </View>
            <Image source={require('../../Image/Icon.png')} style={{ marginVertical: dimension.width * 0.05, marginHorizontal: dimension.width * 0.45, width: dimension.width * 0.03, height: dimension.width * 0.05 }} />
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

            <Image
                style={{ borderTopLeftRadius: dimension.width * 0.1, borderTopRightRadius: dimension.width * 0.1, width: dimension.width * 0.9, height: dimension.height * 0.2, alignSelf: 'center', marginTop: 20 }}
                resizeMode={'stretch'} source={require('../../Image/search.png')} />
            <Text
                style={{ paddingBottom: 10, borderBottomWidth: 0.5, textAlignVertical: 'top', width: dimension.width * 0.9, borderColor: '#6E7077', fontWeight: 'bold', marginLeft: dimension?.width * 0.05, marginTop: dimension?.height * 0.03, color: '#15224F', fontSize: 20, textAlign: 'left' }}>
                Search Results
            </Text>
            <View style={{ width: dimension.width * 0.9, alignSelf: 'center', flexDirection: 'row', marginTop: dimension.height * 0.02 }}>
                <Text style={{ color: 'black', fontSize: 16, textAlignVertical: 'center' }}>
                    Search By
                </Text>
                <Text style={{ backgroundColor: '#FFDAEE', fontSize: 12, textAlign: 'center', textAlignVertical: 'center', borderRadius: 20, width: dimension.width * 0.2, marginLeft: dimension.width * 0.02 }}>
                    Town Name
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#E53A96', fontSize: 20, right: 0, marginLeft: dimension.width * 0.3 }}>
                        Change
                    </Text>
                </TouchableOpacity>

            </View>
            <SafeAreaView style={{ paddingTop: 20, width: dimension.width * 0.9, height: dimension.height * 0.45, alignSelf: 'center' }}>
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

export default SearchResults;