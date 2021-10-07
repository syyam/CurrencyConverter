import React from 'react';

import Home from '../screens/Home';
import CountryList from '../screens/CountryList';
// import CurrencyList from '../modules/home/screens/CurrencyList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="CountryList"
                    component={CountryList}
                    options={({ navigation, route }) => ({
                        headerShown: false
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
