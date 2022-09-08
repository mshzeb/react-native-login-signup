import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TEAMCITY } from 'ci-info';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}>
                            Example of Login and Sign Up in React Native
                            {'\n\n'}
                            This is the Home Screen
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    Login and Sign Up Example {'\n'} React Native
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;