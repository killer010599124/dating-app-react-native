
import React, { useEffect, useState, useRef, useCallback, Component } from 'react';
import { StyleSheet, SafeAreaView, Modal, ScrollView, TouchableOpacity, View, Dimensions, Text, StatusBar, Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';

import { Button } from '../components';

const Spacer = ({ spacing, axis = 'Vertical' }) => (
    <View style={axis === 'Vertical' ? { height: spacing } : { width: spacing }} />
);

const intersperse = (item, array) =>
    array.reduce((acc, each, index) => {
        const isLast = index + 1 === array.length;
        if (isLast) {
            return [...acc, each];
        }
        return [...acc, each, item];
    }, []);

const flexOne = { flex: 1 };
const backgroundBlue = { backgroundColor: '#e9edf0' };

const GridView = ({
    children,
    crossAxisCount,
    mainAxisSpacing = 0,
    crossAxisSpacing = 0,
}) => {
    const defaultSection = Array.from({ length: crossAxisCount }).map(() => null);
    const numberOfColumns = Math.round(children.length / crossAxisCount);

    let copiedChildren = children.slice();

    const flexRow = {
        flexDirection: 'row',
    };

    const getItemsForRow = () =>
        defaultSection.map(() =>
            copiedChildren.length ? (
                <View style={flexOne}>{copiedChildren.shift()}</View>
            ) : (
                <View style={flexOne} />
            ),
        );

    const list = Array.from({ length: numberOfColumns }).map((_, idx) => (
        <View style={flexRow} key={idx}>
            {intersperse(
                <Spacer axis="Horizontal" spacing={crossAxisSpacing} />,
                getItemsForRow(),
            )}
        </View>
    ));

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            {intersperse(<Spacer spacing={mainAxisSpacing} />, list)}
        </ScrollView>
    );
};

const paddingTen = { padding: 10 };

const Choice = ({ children, selectPhoto }) => (

    <View style={{ ...backgroundBlue, borderRadius: 10, height: Dimensions.get('window').height * 0.2 }}>
        <Image style={{ width: '100%', height: '100%', borderRadius: Dimensions.get('window').width * 0.03 }} source={require('../../Image/avatar.jpg')} />
        <TouchableOpacity
            onPress={() => selectPhoto()}
            style={{ marginTop: Dimensions.get('window').width * 0.295, marginLeft: Dimensions.get('window').width * 0.18, position: 'absolute', backgroundColor: '#E53A96', width: Dimensions.get('window').width * 0.06, height: Dimensions.get('window').width * 0.06, borderRadius: Dimensions.get('window').width * 0.03 }}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'>
            <Text style={{ marginTop: -Dimensions.get('window').height * 0.015, textAlign: 'center', color: 'white', fontSize: 33, alignSelf: 'center' }}>+</Text>
        </TouchableOpacity>

    </View>
);
const AddBestPhoto = ({navigation}) => {
    // signup() {
    //     Actions.signup()
    // }
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [isVisible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!isVisible);
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
        <View style={{ backgroundColor: 'white', height: dimension.height }}>
            <SafeAreaView style={{ backgroundColor: 'white', alignSelf: 'center', width: dimension.width * 0.8, marginTop: dimension.height * 0.1 }}>

                <View style={paddingTen}>
                    <GridView crossAxisCount={3} mainAxisSpacing={10} crossAxisSpacing={10}>
                        <Choice selectPhoto={toggleVisibility}>One</Choice>
                        <Choice selectPhoto={toggleVisibility}>Two</Choice>
                        <Choice selectPhoto={toggleVisibility}>Three</Choice>
                        <Choice selectPhoto={toggleVisibility}>Four</Choice>
                        <Choice selectPhoto={toggleVisibility}>Five</Choice>
                        <Choice selectPhoto={toggleVisibility}>Six</Choice>
                        <Choice selectPhoto={toggleVisibility}>Seven</Choice>
                    </GridView>
                </View>
            </SafeAreaView>
            <Modal visible={isVisible} animationType="fade" transparent={true} onRequestClose={() => toggleVisibility()}>
                <TouchableOpacity style={styles.modalContainer} onPressOut={() => toggleVisibility()}>
                    <View style={{...styles.modalView, width:dimension.width*0.8}}>
                        <View style={styles.alert}>
                            <Text style={{ ...styles.alertTitle, textAlign: 'center' }}>Access Your Photos</Text>
                            <Text style={{ ...styles.alertMessage, textAlign: 'center' }}>
                                Tinder needs access to your photos so you can
                                include them in your profile
                            </Text>
                            <View style={styles.alertButtonGroup}>
                                <View style={styles.alertButton}>
                                    <TouchableOpacity title="OK" onPress={() => toggleVisibility()} />
                                </View>
                            </View>
                            <View style={styles.alertButtonGroup}>
                                    <TouchableOpacity ><Text style = {styles.alertSelect}>Select Photos</Text></TouchableOpacity>
                             
                                    <TouchableOpacity><Text style = {styles.alertSelect}>Allow Access To All Photos</Text></TouchableOpacity>
                                
                                    <TouchableOpacity><Text style = {styles.alertSelect}>Don't Allow</Text></TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <View style={{ backgroundColor: 'white', position: 'absolute', alignSelf: 'center', marginTop: dimension.height * 0.75 }}>
                <Button title={'Continue'} onPress={() =>{navigation.navigate('SendingPhoto')}}/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {

        // justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    itemsWrap: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginVertical: -(12 / 2),
        marginHorizontal: -(12 / 2),
    },
    singleItem: {
        marginHorizontal: 12 / 2,

    },
    alertButtonGroup: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 8,
        marginLeft: 5,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    modalContainer: {
        backgroundColor: "#ccc",
        opacity: 0.8,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        
    },
    modalView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        
    },
    alert: {
        width: '100%',
        maxWidth: 300,
        margin: 48,
        elevation: 24,
        borderRadius: 2,
        backgroundColor: '#fff',
        borderRadius : 30
    },
    alertTitle: {
        margin: 24,
        fontWeight: "bold",
       
        fontSize: 20,
        color: "#000"
    },
    alertSelect: {
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 18,
        color: "blue",
        borderTopWidth: 1,
        textAlign : 'center',
        borderColor :'black',
    },
    alertMessage: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
        fontSize: 16,
        color: "#000"
    },
    alertButton: {
        marginTop: 12,
        marginRight: 8,
        width: 100
    },
});
export default AddBestPhoto;