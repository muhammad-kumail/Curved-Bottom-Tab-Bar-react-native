import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../components/bottomBar';

export default function Account({ navigation }) {
    return (
        <View style={{ flex: 1,backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>Account Information</Text>
            </View>
        </View>
    );
}
