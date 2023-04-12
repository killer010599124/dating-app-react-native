import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Button1 from '../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import  {  Slider  }  from  'react-native' ;
// import Slider from '@react-native-community/slider';

const EditIntro = () => {
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

            <View style = {{marginTop : dimension.height*0.07,flexDirection : 'row', alignSelf : 'center', width : dimension.width * 0.9}}>
                <Text style = {{textAlignVertical : 'bottom',fontSize : 30, fontWeight : 'bold',}}>Salman, 30</Text>
                <Text style = {{textAlignVertical : 'bottom',fontSize : 15,marginLeft : dimension.width * 0.25}}>0 hellos</Text>
                <Text style = {{textAlignVertical : 'bottom',fontSize : 15,marginLeft : dimension.width * 0.05 }}>0 cruses</Text>
                
            </View>
            <Text style = {{color : '#6E7077', marginLeft : dimension.width * 0.05, marginTop : dimension.height * 0.03}}>Man</Text>

            <View style={{  alignSelf: 'center', height: dimension.height * 0.1, width: dimension.width * 0.9,marginTop : dimension.height * 0.05 }}>

                
                <Text style={{ textAlignVertical: 'center',fontWeight : 'bold',fontSize : 20, }}>About me</Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.9,paddingHorizontal : 10 }} placeholder="This is for lice"
                    placeholderTextColor="#6E7077" selectionColor="#000"
                />
            </View>
            <View style={{  alignSelf: 'center', height: dimension.height * 0.1, width: dimension.width * 0.9,marginTop : dimension.height * 0.05 }}>

                
                <Text style={{ textAlignVertical: 'center',fontWeight : 'bold',fontSize : 20, }}>Work & Education</Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.9,paddingHorizontal : 10 }} placeholder="IT Company"
                    placeholderTextColor="#6E7077" selectionColor="#000"
                />
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.9, paddingHorizontal : 10}} placeholder="Android Developer"
                    placeholderTextColor="#6E7077" selectionColor="#000"
                />
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.9, paddingHorizontal : 10}} placeholder="Designer"
                    placeholderTextColor="#6E7077" selectionColor="#000"
                />
            </View>
            <View style={{ position: 'absolute', marginTop: dimension.height * 0.7, alignSelf: 'center' }}>

                <Button title={'Submit'} />
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
        backgroundColor: 'white',
        borderRadius: 15,
        
        fontSize: 12,
        color: 'black',
        borderBottomWidth: 2,
        borderColor: '#6E7077',
        marginVertical: 10
    },


});

export default EditIntro;