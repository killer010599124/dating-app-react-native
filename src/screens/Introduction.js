import React, { useEffect, useState, useRef, useCallback } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';

const HomeCarousel = ({navigation}) => {
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollRef = useRef();
    let intervalId = null;

    const onChange = () => {
        setDimension(Dimensions.get('window'));
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            //   Dimensions.removeEventListener('change', onChange);
        };
    });

    const onSlideChange = useCallback(() => {
        // Calculate newIndex here and use it to update your state and to scroll to the new slide
        if(selectedIndex === carouselImages.length-1){
            navigation.navigate("SignIn");
        }
        // const newIndex =
        //     selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;
        const newIndex = selectedIndex +1 ;
        setSelectedIndex(newIndex);

        scrollRef?.current?.scrollTo({
            animated: true,
            y: 0,
            x: dimension.width * newIndex,
        });
    }, [selectedIndex]);

    const startInterval = useCallback(() => {
        intervalId = setInterval(onSlideChange, 2000);
    }, [onSlideChange]);

    useEffect(() => {
        startInterval();

        return () => {
            // Clear the interval when component unmounts, otherwise you could have memory leaks
            clearInterval(intervalId);
        };
    }, [onSlideChange]);

    const onTouchStart = () => {
        // As soon as the user touches the slide, stop the automatic sliding
        clearInterval(intervalId);
    };

    const onTouchEnd = () => {
        // As soon as the user stops touching the slide, releases it, start the automatic sliding again
        startInterval();
    };

    const carouselImages = [
        { url: require('../../Image/intro.png'), title: "Find Your Special Someone", content: "With our new exciting features" },
        { url: require('../../Image/intro.png'), title: "More Profiles, More Dates", content: "With our new exciting features" },
        { url: require('../../Image/intro.png'), title: "Get Exicited Offers", content: "With our new exciting features" }
    ];

    const setIndex = event => {
        let viewSize = event.nativeEvent.layoutMeasurement.width;
        let contentOffset = event.nativeEvent.contentOffset.x;
        let carouselIndex = Math.floor(contentOffset / viewSize);
        setSelectedIndex(carouselIndex);
    };

    return (
        <View style={{ width: dimension.width, height: dimension.height / 1.1, backgroundColor: 'white' }}>
            <ScrollView
                horizontal
                ref={scrollRef}
                onMomentumScrollEnd={setIndex}
                showsHorizontalScrollIndicator={false}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                pagingEnabled
                style={{ width: dimension?.width / 2, marginLeft: dimension?.width / 4, marginTop: dimension?.height / 8 }}>
                {carouselImages.map((value, key) => (
                    <Image
                        source={`${value.url}`}
                        style={{ width: dimension?.width / 2, height: 250, resizeMode: 'stretch' }}
                        PlaceholderContent={<ActivityIndicator />}
                    />

                ))}
            </ScrollView>
            <View
                style={{
                    flexDirection: 'column',
                    position: 'absolute',
                    alignSelf: 'center',
                    textAlign : 'center',
                    alignItems : 'center'
                }}>

                {carouselImages.map((val, key) => (
                    <Text
                        style={key === selectedIndex ? {fontWeight : 'bold', marginTop: dimension?.height * 0.5, color: '#15224F',  fontSize: 20, textAlign: 'center' } : { display: 'none' }}>
                        ⬤{key === selectedIndex ? val.title : ''}
                    </Text>
                ))}
            </View>
            <View
                style={{
                    flexDirection: 'column',
                    position: 'absolute',
                    alignSelf: 'center',
                    textAlign : 'center',
                    alignItems : 'center'
                }}>

                {carouselImages.map((val, key) => (
                    <Text
                        style={key === selectedIndex ? { width: dimension?.width * 0.7, marginTop: dimension?.height * 0.55, color: '#6E7077', fontWeight: '600', fontSize: 14, textAlign: 'center' } : { display: 'none' }}>
                        ⬤{key === selectedIndex ? val.content : ''}
                    </Text>
                ))}

            </View>
            <View
                style={{
                    flexDirection: 'column',
                    position: 'absolute',
                    alignSelf: 'center',
                    textAlign : 'center',
                    alignItems : 'center'
                }}
            >
                <TouchableOpacity
                    style={{...styles.loginScreenButton,marginTop:dimension.height*0.65,width:dimension.width*0.7,height:dimension.height*0.07,borderRadius:dimension.height*0.035}}
                    // onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Get Started</Text>
                </TouchableOpacity>
                <Text
                    style = {{ fontSize : 16, paddingTop:10, fontWeight : 'bold'}}
                >Skip</Text>
                
                
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    
                    alignSelf: 'center',
                }}>

                {carouselImages.map((val, key) => (

                    <Text
                        key={key}
                        style={{...key === selectedIndex ? { color: '#E53A96', paddingLeft: 5 } : { color: 'gray', paddingLeft: 5, },marginTop:dimension.height*0.85 }}>
                        ⬤
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
    },
    loginScreenButton: {
        
        backgroundColor: '#E63A96',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E63A96',
        textAlign:'center',
        alignItems : 'center'
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        lineHeight:50,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default HomeCarousel;