import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import {
    StyleSheet
    , Text
    , View
    , TextInput
    , TouchableOpacity
    , AsyncStorage
    , Keyboard
    ,Dimensions
} from 'react-native';
import Button from './Button';
// import { Actions } from 'react-native-router-flux';
const Form  = () => {

    
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
    // saveData = async () => {
    //     const { email, password } = this.state;
    //     let loginDetails = {
    //         email: email, password: password
    //     }
    //     if (this.props.type !== 'Login') {
    //         AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    //         Keyboard.dismiss();
    //         alert("You have registered successfully. " + 'Your credentials are:- User-ID: ' + email + ' P.W.:' + password);
    //         this.login();
    //     }
    //     else if (this.props.type == 'Login') {
    //         try {
    //             let loginDetails = await AsyncStorage.getItem('loginDetails');
    //             let ld = JSON.parse(loginDetails);
    //             if (ld.email != null && ld.password != null) {
    //                 if (ld.email == email && ld.password == password) {
    //                     alert('Welcome Back !');
    //                 }
    //                 else {
    //                     alert('Mentioned Email and Password doesnot exist!');
    //                 }
    //             }
    //         } catch (error) {
    //             alert(error);
    //         }
    //     }
    // }
    // showData = async () => {
    //     let loginDetails = await AsyncStorage.getItem('Login Details Are'); let ld = JSON.parse(loginDetails);
    //     alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
    // }
    
        return (
            <View style={styles.container}>
                <Text style = {{marginLeft : dimension.width/10,fontSize:12}}>Email or Phone Number</Text>
                <TextInput style={{...styles.inputBox,height:40, width: dimension.width * 0.8,}}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="User ID"
                    placeholderTextColor="black" selectionColor="#000" keyboardType="email-address"
                    onSubmitEditing= {() => this.password.focus()} />
                <Text style = {{marginLeft : dimension.width/10, paddingTop:10,fontSize:12}}>Password</Text>
                <TextInput style={{...styles.inputBox,height:40, width: dimension.width * 0.8,}} selectionColor="#000"  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor="black" 
                />
                
                <Button title={'Sign In'} />
            </View>
        )
    
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center', alignItems: 'center',
        marginTop: -150
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
    button: {
        width: 299,
        backgroundColor: 'white',
        borderWidth : 1,
        borderColor : '#E53A96',
        borderRadius: 10,
        marginVertical: 9,
        paddingVertical: 11
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500', color: '#ffffff', textAlign: 'center'
    }
});

export default Form;