import React, { useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../(menudependencies)/Categories'; 
import MenuItems from '../(menudependencies)/menuitems';
import { items } from '../(menudependencies)/menuindex';

const Menu = () => {
  const scrollViewRef = useRef(null);

  // Create references for each unique category section
  const sectionRefs = items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = React.createRef();
    return acc;
  }, {});

  // Scroll to the section when a category button is clicked
  const scrollToSection = (type) => {
    const sectionRef = sectionRefs[type];
    if (sectionRef?.current) {
      sectionRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ y, animated: true });
        }
      );
    }
  };

  // Get unique categories
  const uniqueCategories = [...new Set(items.map(item => item.type))];

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView 
        ref={scrollViewRef} 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories scrollToSection={scrollToSection} />

        {uniqueCategories.map(category => (
          <View key={category} ref={sectionRefs[category]}>
            <Text className="text-white text-lg font-bold">{category}</Text>
            <MenuItems items={items.filter(item => item.type === category)} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
