import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { Colors } from "../constants";
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
const Subject = ({ title, content,  }) => {
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
            <Text
                style={{ fontWeight: 'bold', marginLeft: dimension?.width * 0.1, marginTop: dimension?.height * 0.1, color: '#15224F', fontSize: 20, textAlign: 'left' }}>
                {title}
            </Text>
            <Text
                style={{ width: dimension?.width * 0.7, marginLeft: dimension?.width * 0.1, color: '#6E7077', fontWeight: '600', fontSize: 14, textAlign: 'left' }}>
                {content}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    
});
export default Subject;
