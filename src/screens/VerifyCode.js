
import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Form from '../components/SignInForm';
import Subject from '../components/Subject';
import SocialConnect from '../components/SocialConnect';
import { Button } from '../components';
const VerifyCode = ({navigation}) => {
    // signup() {
    //     Actions.signup()
    // }
    const CODE_LENGTH = new Array(4).fill(0);

    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const onChange = () => {
        setDimension(Dimensions.get('window'));
    };
    const state = {
        value: "",
    };
    const input = React.createRef();
    const { value } = state;
    const values = value.split("");
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
            <Subject title={'Code Verification'} content={"Check your email for verification code, and you can continue."} />
            <View style={{...styles.wrap, marginTop:dimension.height*0.25}}>
                {CODE_LENGTH.map((v, index) => {
                    const removeBorder =
                        index === CODE_LENGTH.length  ? styles.noBorder : undefined;
                    return (
                        <View style={[styles.display, removeBorder]} key={index}>
                            <Text style={styles.text}>{values[index] || ""}</Text>
                        </View>
                    );
                })}
            </View>
            <View style={{ position: 'absolute', alignSelf: 'center', marginTop: 300 }}>
                <Button title={'Continue'} onPress={() =>{navigation.navigate('AddBestPhoto')}}/>
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
    wrap: {
        alignSelf:'center',
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",

        flexDirection: "row",
      },
      display: {
        borderRightWidth: 3,
        borderRightColor: "rgba(0, 0, 0, 0.5)",
        width: 56,
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      },
      text: {
        fontSize: 32,
      },
      noBorder: {
        borderRightWidth: 0,
      },
      input: {
        position: "absolute",
        fontSize: 32,
        textAlign: "center",
        backgroundColor: "transparent",
        width: 32,
        top: 0,
        bottom: 0,
      }
});
export default VerifyCode;