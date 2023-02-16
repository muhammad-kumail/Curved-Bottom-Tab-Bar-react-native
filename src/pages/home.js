import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../components/bottomBar';


export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1,backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>Home Page</Text>
            </View>
            
        </View>
    );
}
