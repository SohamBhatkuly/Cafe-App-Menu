import React from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


const Search = () => {
    return (
        <SafeAreaView className="flex-1">
            <StatusBar barStyle="light-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 bg-white">
                    <TextInput placeholder='Restaurant' className="ml-2 flex-1" />
                </View>
            </View>
            {/* Add Categories and MenuItems components here if needed */}
        </SafeAreaView>
    );
};

export default Search;
