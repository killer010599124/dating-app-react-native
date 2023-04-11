import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";


import Users from "../../fakedata/users.json";
import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';
import { TextInput } from 'react-native-gesture-handler';
const ChatField = () => {
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

    const Chatitem1 = ({ content, }) => {
        return (
            <View style = {{marginTop : dimension.height * 0.02,flexDirection : 'row' , justifyContent :'flex-start' }}>
                <Text style={{ maxWidth: dimension.width * 0.6, paddingHorizontal: 5, paddingVertical: dimension.height * 0.03, fontSize: 16, backgroundColor: '#FD92C6', color: 'white', borderRadius: 20, borderBottomLeftRadius: 0, textAlign: 'left' }}>
                    {content}
                </Text>
            </View>


        )
    }
    const Chatitem2 = ({ content, }) => {
        return (
            <View style = {{ marginTop : dimension.height * 0.02, flexDirection : 'row' , justifyContent :'flex-end' }}>
                <Text style={{ maxWidth: dimension.width * 0.6, paddingVertical: dimension.height * 0.03, paddingHorizontal: 5, fontSize: 16, backgroundColor: '#F7FBFE', color: '#022150', borderRadius: 20, borderBottomRightRadius: 0, textAlign: 'right' }}>
                    {content}
                </Text>
            </View>


        )
    }

    return (
        <View style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%'
        }}>
            
            <View style={{
                width: dimension.width * 0.9,
                height: dimension.height * 0.8,
                marginTop : dimension.height * 0.1,
                alignSelf: 'center',
            }}>
                <Chatitem1 content={'Hello,White...How are you? It is nice to meet you!'} />
                <Chatitem2 content={'Hi,. It is very nice to meet you.'} />
                <Chatitem2 content={'You like, Music?'} />
                <Chatitem1 content={'Yeah, of course. '} />
            </View>
            
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: '#F7FBFE',
                    borderColor: '#E53A96',
                    borderWidth: 0.5,
                    borderRadius: dimension.height * 0.04,
                    alignSelf: 'center',
                    width: dimension.width * 0.9,
                    height: dimension.height * 0.08,
                    marginTop: dimension.height * 0.8,
                    flexDirection: 'row',
                    paddingHorizontal : 20,
                    alignItems : 'center'
                }}>

                <Image source={require('../../Image/Camera.png')} style={{ width: 30, height: 30 }} />
                <Image source={require('../../Image/Size.png')} style={{ width: 30, height: 30 }} />
                <TextInput style={{...styles.inputBox, width: dimension.width * 0.62,color : 'black' }} selectionColor="#000"  underlineColorAndroid='rgba(0,0,0,0)' uplaceholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                />
                <Image source={require('../../Image/Message.png')} style={{ width: 30, height: 30 }} />
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
    inputBox: {
        alignSelf : 'center',
        backgroundColor: 'white', borderRadius: 15,
        paddingHorizontal: 15,
        fontSize: 12,
        color: 'black',
        borderWidth : 1,
        borderColor : '#E53A96',
        marginVertical: 5
    },
});

export default ChatField;