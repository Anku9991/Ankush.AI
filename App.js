// App.js — Ankush.AI React Native App
// Run: npx react-native init AnkushAI --template react-native-template-typescript
// Then replace App.tsx/App.js with this file

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

const COLORS = {
  greenDark: '#0d3b1a',
  greenBright: '#27ae60',
  yellow: '#f5c518',
  dark: '#081a0d',
  white: '#f0fff4',
  gray: '#a8d5b5',
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: COLORS.greenDark },
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontWeight: '700' },
          tabBarStyle: {
            backgroundColor: COLORS.dark,
            borderTopColor: 'rgba(245,197,24,0.2)',
            paddingBottom: 6,
            height: 60,
          },
          tabBarActiveTintColor: COLORS.yellow,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarIcon: ({ focused, color }) => {
            const icons = {
              Home: '🏠', Services: '💼', Portfolio: '🎨',
              About: '👤', Contact: '📞',
            };
            return (
              <Text style={{ fontSize: focused ? 22 : 18 }}>
                {icons[route.name]}
              </Text>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Ankush.AI', headerTitle: '🤖 Ankush.AI' }} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
