import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import Modal from 'react-native-modal';

import Button1 from '../../components/Button1';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components';
const MainHome = ({navigation}) => {
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [visibleModel, setVisibleModel] = useState(null);
    const [visibleHeart, setVisibleHeart] = useState(null);
    const [visibleHeartModel, setVisibleHeartModel] = useState(null);
    const onChange = () => {
        setDimension(Dimensions.get('window'));
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            //   Dimensions.removeEventListener('change', onChange);
        };
    });
    const _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    const royalModal = () => {
        return (
            <View style={{ borderTopRightRadius: dimension.width * 0.05, borderTopLeftRadius: dimension.width * 0.05, height: dimension.height * 0.5, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ marginTop: -dimension.height * 0.03, alignItems: 'center' }}  >
                    <Image source={require('../../../Image/royal.png')} />
                    <Image style={{ position: 'absolute', alignSelf: 'center', marginTop: 10 }} source={require('../../../Image/mark.png')} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', width: dimension.width * 0.6, marginTop: dimension?.height * 0.05, color: '#15224F', fontSize: 20, }}>
                    Make sure he notice you by sending a queen crown
                </Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.8, }} placeholder="Write something here"
                    placeholderTextColor="black" selectionColor="#000"
                />
                <Button title={'Send Admire!'} onPress={() => { setVisibleModel(null); navigation.navigate('Request')}} />
                <Text style={{ position: 'absolute', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', width: dimension.width * 0.8, marginTop: dimension?.height * 0.4, color: 'black', fontSize: 16, }}>
                    I changed my mind
                </Text>
            </View>
        )

    };
    const heartModal = () => {
        return (
            <View style={{ borderTopRightRadius: dimension.width * 0.05, borderTopLeftRadius: dimension.width * 0.05, height: dimension.height * 0.45, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ marginTop: -dimension.height * 0.03, alignItems: 'center' }}  >
                    <Image source={require('../../../Image/heart.png')} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', width: dimension.width * 0.8, marginTop: dimension?.height * 0.05, color: '#15224F', fontSize: 20, }}>
                What do you like about my pic?
                </Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.8, }} placeholder="Write something here"
                    placeholderTextColor="black" selectionColor="#000"
                />
                <Button title={'Send Admire!'} onPress={() => { setVisibleHeart(null); setVisibleHeartModel(null); navigation.navigate('Request')}} />
                <Text style={{ position: 'absolute', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', width: dimension.width * 0.8, marginTop: dimension?.height * 0.35, color: 'black', fontSize: 16, }}>
                    I changed my mind
                </Text>

            </View>
        )

    };

    return (
        <View style={{
            // backgroundColor: 'white'

        }}>

            <Image
                style={{ borderTopLeftRadius: dimension.width * 0.05, borderTopRightRadius: dimension.width * 0.05, width: dimension.width * 0.9, height: dimension.height * 0.8, alignSelf: 'center', marginTop: 20 }}
                resizeMode={'stretch'} source={require('../../../Image/start.png')} />
            <View style={{
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'center',
                height: dimension.height * 0.1,
                width: dimension.width * 0.9,
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: dimension.height * 0.6,
                textAlign: 'center'
            }}>
                <TouchableOpacity style={{ padding: 20 }}>
                    <Image source={require('../../../Image/delete.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 20, alignItems: 'center' }} onPress={() => { setVisibleModel(1) }} >
                    <Image source={require('../../../Image/royal.png')} />
                    <Image style={{ position: 'absolute', alignSelf: 'center', marginTop: 30 }} source={require('../../../Image/mark.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 20 }} onPress={() => { setVisibleHeart(1) }}>
                    <Image source={require('../../../Image/favourite.png')} />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', backgroundColor: ' rgba(0, 0, 0, 0.7)', height: dimension.height * 0.1, width: dimension.width * 0.9, alignSelf: 'center', position: 'absolute', marginTop: dimension.height * 0.725, borderWidth: 1, borderColor: '#E63A96' }}>
                <Text style={{ color: 'white', textAlignVertical: 'center', fontSize: 20 }}>Pooja, 26</Text>
                <Text style={{ color: 'white', textAlignVertical: 'center', fontSize: 14 }}>just close to you</Text>
            </View>
           
            <Modal
                isVisible={visibleModel === 1}
                style={styles.bottomModal}
            >
                {royalModal()}
                
            </Modal>
            <Modal
                isVisible={visibleHeartModel === 1}
                style={styles.bottomModal}
            >
                {heartModal()}
            </Modal>
            <View style={visibleHeart ?  { ...styles.container, } :{ display : 'none'  ,...styles.container, }} >
                <Image
                    resizeMode={'stretch'}
                    source={require('../../../Image/whiteheart.png')}
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        marginTop: dimension.height * 0.2,
                        width: dimension.width * 0.3,
                        height: dimension.width * 0.3,

                    }} />
                <Text style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                    width: dimension.width * 0.8,
                    marginTop: dimension.height * 0.4,
                }}>
                    What do you like about my pic?
                </Text>
                <Text style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 12,
                    textAlign: 'center',
                    width: dimension.width * 0.8,
                    marginTop: dimension.height * 0.45,
                }}>
                    Send Message
                </Text>
                <View
                    
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: dimension.height * 0.5, paddingHorizontal: dimension.width * 0.08 }}>
                    <TouchableOpacity
                        onPress={() => {setVisibleHeartModel(1)}}
                        style={{ ...styles.loginScreenButton2, marginTop: dimension.height * 0.02, width: dimension.width * 0.4, height: dimension.height * 0.07, borderRadius: dimension.height * 0.035 }}
                        // onPress={() => navigate('HomeScreen')}
                        underlayColor='#fff'>
                        <Text style={styles.loginText2}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.loginScreenButton, marginTop: dimension.height * 0.02, width: dimension.width * 0.4, height: dimension.height * 0.07, borderRadius: dimension.height * 0.035 }}
                        // onPress={() => navigate('HomeScreen')}
                        underlayColor='#fff'>
                        <Text style={styles.loginText}>Skip</Text>
                    </TouchableOpacity>
                </View>
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
    background: {
        position: 'absolute',

    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    inputBox: {
        alignSelf: 'center',
        backgroundColor: 'white', borderRadius: 15,
        paddingHorizontal: 15,
        fontSize: 12,
        color: 'black',
        borderBottomWidth: 2,
        borderColor: 'black',
        marginVertical: 20
    },
    loginScreenButton: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10
    },
    loginScreenButton2: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E63A96',
        textAlign: 'center',
        alignItems: 'center'
    },
    loginText2: {
        color: '#E63A96',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default MainHome;