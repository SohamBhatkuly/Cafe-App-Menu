import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const About = () => {
  return (
    <ScrollView className="flex-1 bg-black">
      <View className="p-4">
        {/* Back Button */}
        <TouchableOpacity className="p-2">
          <Text className="text-beige text-24 color-white">{'<-'}</Text>
        </TouchableOpacity>

        {/* Logo */}
        <View className="items-center py-4">
          <Text className="text-beige text-24 font-bold color-white">
            Kafe Koffee Knight
          </Text>
        </View>

        {/* Content Section */}
        <View className="py-6">
          {/* Image and Description 1 */}
          <View className="flex-row px-4">
            {/* <Image
              source={require('./images/splash.png')}
              className="w-24 h-24 resize-cover"
            /> */}
            <View className="flex-1 justify-center">
              <Text className="color-white">
                {/* Your placeholder text */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>

          {/* Image and Description 2 */}
          <View className="flex-row px-4">
            {/* <Image
              source={require('./images/splash.png')}
              className="w-24 h-24 resize-cover"
            /> */}
            <View className="flex-1 justify-center">
              <Text className="color-white">
                {/* Your placeholder text */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>

          {/* Image and Description 3 */}
          <View className="flex-row px-4">
            {/* <Image
              source={require('./images/splash.png')}
              className="w-24 h-24 resize-cover"
            /> */}
            <View className="flex-1 justify-center">
              <Text className="color-white">
                {/* Your placeholder text */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;