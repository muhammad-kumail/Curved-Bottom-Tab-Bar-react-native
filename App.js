import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/home';
import Account from './src/pages/account';
import Notes from './src/pages/notes';
import Settings from './src/pages/settings';
import BottomBar from './src/components/bottomBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{headerShown: false}}
        tabBar={props => <BottomBar {...props} 
                iconFirst={{
                    type: 'material',
                    name: 'home',
                    onPress: () => props.navigation.navigate('Home')
                }}
                iconSecond={{
                    type: 'material',
                    name: 'person',
                    onPress: () => props.navigation.navigate('Account')
                }}
                iconThird={{
                    type: 'foundation',
                    name: 'clipboard-notes',
                    onPress: () => props.navigation.navigate('Notes')
                }}
                iconForth={{
                    type: 'material',
                    name: 'settings',
                    onPress: () => props.navigation.navigate('Settings')
                }}
                backgroundColor={'#9C64B8'}
                foregorundColor={'white'}
                iconColor='white'
        />}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Account' component={Account} />
        <Tab.Screen name='Notes' component={Notes} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
