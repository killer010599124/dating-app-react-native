
import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { StyleSheet, TextInput, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Form from '../components/SignInForm';
import Subject from '../components/Subject';
import SocialConnect from '../components/SocialConnect';
import { Button } from '../components';
const SignUpp = () => {
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
            <Subject title={'Sign Up'} content={"Let's go for explore continues"} />
            <View style ={{position : 'absolute', alignSelf:'center', marginTop:dimension.height*0.25}}>
                <Text style={{  fontSize: 12 }}>Email or Phone Number</Text>
                <TextInput style={{ ...styles.inputBox, height: 40, width: dimension.width * 0.8, }} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Welcome@gmail.com"
                    placeholderTextColor="black" selectionColor="#000" keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()} />
                <Text style={{ paddingTop: 20, fontSize: 12, width: dimension.width * 0.7 }}>By continuing, you agree to our Terms of Service & Privacy Policy.</Text>
                <Button title={'Next'} />
            </View>

            <View style={{ marginTop: dimension.height * 0 }}>

                <SocialConnect />
            </View>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Not a User? </Text>
                <TouchableOpacity
                // onPress={this.signup}
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
export default SignUpp;