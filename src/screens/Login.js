
import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Form from '../components/SignInForm';
import Subject from '../components/Subject';
import SocialConnect from '../components/SocialConnect';

const SignIn = ({navigation}) => {
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
            <Subject title={'Welcome Back!'} content={"Let's go for explore continues"} />
            
            <Form type="Login" func = {() => {navigation.navigate('VerifyCode')}} />
            <TouchableOpacity>
                <Text style={{...styles.forgotButton, textAlign:'center',alignSelf : 'center', marginTop:dimension.height*0.12}}>Forgot password?</Text>
            </TouchableOpacity>
            <SocialConnect />
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Not a User? </Text>
                <TouchableOpacity
                onPress={() =>{navigation.navigate('SignUp')}}
                >
                    <Text style={styles.signupButton}>Register here</Text></TouchableOpacity>
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
        marginBottom:30,
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
    forgotButton:{
        position : 'absolute',
        justifyContent: 'center', alignItems: 'center',
        color: '#700d49', fontSize: 15,
        fontWeight: '500',
    }
});
export default SignIn;