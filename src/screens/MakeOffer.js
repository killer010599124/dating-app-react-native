import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import  {  Slider  }  from  'react-native' ;
// import Slider from '@react-native-community/slider';

const MakeOffer = () => {
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

            <View style={{ paddingTop: dimension.height * 0.1, alignSelf: 'center', height: dimension.height * 0.1, width: dimension.width * 0.8, position: 'absolute' }}>

                <Image style={{ alignSelf: 'flex-start', width: 25, height: 25 }} source={require('../../Image/select.png')}>
                </Image>
                <Text style={{ textAlignVertical: 'center', marginTop: dimension.height * 0.1, paddingLeft: 40, position: 'absolute' }}>Choose Categories</Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.8, }} placeholder="Choose Categories"
                    placeholderTextColor="#6E7077" selectionColor="#000"
                />
            </View>
            <View style={{ paddingTop: dimension.height * 0.25, alignSelf: 'center', height: dimension.height * 0.1, width: dimension.width * 0.8, position: 'absolute' }}>

                <Image style={{ alignSelf: 'flex-start', width: 25, height: 25 }} source={require('../../Image/select.png')}>
                </Image>
                <Text style={{ textAlignVertical: 'center', paddingLeft: 40, marginTop: dimension.height * 0.25, position: 'absolute' }}>Search By Town</Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.8, }} placeholder="Enter Your Town"
                    placeholderTextColor="#6E7077" selectionColor="#000"
                />
            </View>
            <View style={{ paddingTop: dimension.height * 0.4, alignSelf: 'center', height: dimension.height * 0.1, width: dimension.width * 0.8, position: 'absolute' }}>

                <Image style={{ alignSelf: 'flex-start', width: 25, height: 25 }} source={require('../../Image/select.png')}>
                </Image>
                <Text style={{ textAlignVertical: 'center', paddingLeft: 40, marginTop: dimension.height * 0.4, position: 'absolute' }}>Search Near By</Text>
                <Text style={{ color: '#6E7077', textAlignVertical: 'center', paddingLeft: 20, marginTop: dimension.height * 0.45, position: 'absolute' }}>Select miles</Text>
                <Slider
                    style={{ height: 40, width: dimension.width * 0.8,position : 'absolute',marginTop : dimension.height*0.5 }}
                    minimumValue={0}
                    maximumValue={10}
                    width={5}
                    minimumTrackTintColor="#E63A96"
                    maximumTrackTintColor="#000000"
                    thumbImage={require('../../Image/Oval.png')}
                    thumbTintColor = "#E63A96"
                />
            </View>
            <View style={{ position: 'absolute', marginTop: dimension.height * 0.7, alignSelf: 'center' }}>

                <Button title={'Search'} />
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


});

export default MakeOffer;