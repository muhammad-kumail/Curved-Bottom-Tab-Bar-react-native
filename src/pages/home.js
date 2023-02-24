import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import BottomBar from '../components/bottomBar';

const IMAGES = [
    { uri: 'https://images.unsplash.com/photo-1590273466070-40c466b4432d' },
    { uri: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg' },
    { uri: 'https://t4.ftcdn.net/jpg/00/78/89/41/360_F_78894153_6vehwXxxFzCbIyFjmZdrtoqxk219gWnd.jpg' },
    { uri: 'https://st.depositphotos.com/2627989/4694/i/600/depositphotos_46941945-stock-photo-spring-forrest-sunset.jpg' },
];
const IMAGE_WIDTH = Dimensions.get('window').width;

export default function Home({ navigation }) {
    const [translateX] = useState(new Animated.Value(0));

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            // Check if the gesture is a horizontal swipe
            return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 2;
        },
        onPanResponderMove: Animated.event([null, { dx: translateX }], { useNativeDriver: false }),
        onPanResponderRelease: (evt, gestureState) => {
            // Determine the index of the image that is currently visible
            const visibleIndex = Math.floor((gestureState.dx / -IMAGE_WIDTH) + 0.5);

            // Animate the carousel to the next image
            Animated.timing(translateX, {
                toValue: -visibleIndex * IMAGE_WIDTH,
                duration: 300,
                useNativeDriver: false,
            }).start();
        },
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.carousel, { transform: [{ translateX: translateX }] }]} {...panResponder.panHandlers}>
                {IMAGES.map((image, index) => (
                    <Image key={index} source={image} style={styles.image} />
                ))}
            </Animated.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousel: {
        flexDirection: 'row',
    },
    image: {
        width: IMAGE_WIDTH,
        height: 200,
        // resizeMode: 'cover',
    },
});