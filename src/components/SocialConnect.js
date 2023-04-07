import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { Colors } from "../constants";
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
const SocialConnect = ({ title, }) => {
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
        <View>
            <Text style = {{...styles.loginText, marginTop:dimension.height*0.2}}>
                ----------You can connect with-----------
            </Text>
            <View style={styles.container}>

            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center', alignItems: 'center',

    },
    loginScreenButton: {
        alignSelf: 'center',
        backgroundColor: '#E63A96',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E63A96',
        textAlign: 'center',
        alignItems: 'center'
    },
    loginText: {
        position : 'absolute',
        color: 'gray',
        textAlign: 'center',
        alignSelf : 'center',

        
    }
});
export default SocialConnect;
