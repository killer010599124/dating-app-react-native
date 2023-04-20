
import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { StyleSheet, TextInput, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Form from '../components/SignInForm';
import Subject from '../components/Subject';
import SocialConnect from '../components/SocialConnect';
import { Button } from '../components';
const EnterPhone = ({navigation}) => {
    // signup() {
    //     Actions.signup()
    // }
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
        <View style={styles.container}>

            {/* <Text
                style={{ fontWeight: 'bold',marginLeft :dimension?.width*0.1, marginTop: dimension?.height * 0.1, color: '#15224F', fontSize: 20, textAlign: 'left' }}>
                Welcome Back!
            </Text>
            <Text
                style={{ width: dimension?.width * 0.7,marginLeft :dimension?.width*0.1, color: '#6E7077', fontWeight: '600', fontSize: 14, textAlign: 'left' }}>
                Let's go for explore continues
            </Text> */}
            <Subject title={'Enter Your Phone Number'} content={"Let's go for explore continues"} />
            <View style={{ position: 'absolute', alignSelf: 'center', marginTop: dimension.height * 0.25 }}>
                <Text style={{ fontSize: 12 }}>Phone</Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.8, }} underlineColorAndroid='rgba(0,0,0,0)' placeholder="+87 326987591"
                    placeholderTextColor="black" selectionColor="#000"
                    secureTextEntry={true} />
               
                <Button title={'Continue'} onPress={() => {navigation.navigate('VerifyCode')}} />
                <Text style={{ paddingTop: 20,textAlign: 'center', fontSize: 12, width: dimension.width * 0.7 }}>Need Help? support@A-Z.gmail.com For more information.Please contact us</Text>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    signupTextCont: {
        marginBottom: 30,
        flexGrow: 1,
        justifyContent: 'center', alignItems: 'flex-end', paddingVertical: 15, flexDirection: 'row',
    },
    signupText: {
        color: '#bd157a', fontSize: 15,
    },
    signupButton: {
        color: '#700d49', fontSize: 15,
        fontWeight: '500',
    },
    forgotButton: {
        position: 'absolute',
        justifyContent: 'center', alignItems: 'center',
        color: '#700d49', fontSize: 15,
        fontWeight: '500',
    },
    inputBox: {
        alignSelf: 'center',
        backgroundColor: 'white', borderRadius: 15,
        paddingHorizontal: 15,
        fontSize: 12,
        color: 'black',
        borderWidth: 1,
        borderColor: '#E53A96',
        marginVertical: 5
    },
});
export default EnterPhone;