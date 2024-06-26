import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { ThemeProvider, useTheme } from './themeControl';
import HomeScreen from './home'; 
import SettingsScreen from './settings';
import MyCardsScreen from './myCards';
import StatisticsScreen from './statistics';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { isDarkTheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName =  require('./assets/home.png');
           }
          else if (route.name === 'My Cards') {
             iconName =  require('./assets/myCards.png');
          }
           else if (route.name === 'Statistics') {
            iconName =  require('./assets/statistics.png');
          } 
          else if (route.name === 'Settings') {
            iconName =  require('./assets/settings.png');
          }

          return <Image source={iconName} style={{ width: 25, height: 25, tintColor: focused ? '#257CFF' : 'gray' }} />;
        },
        tabBarShowLabel: true,
        color:"#257CFF",
        tabBarStyle: {
          borderWidth: -5,
          borderTopWidth: 0,
          height: 60,
          color: "#257CFF",
          backgroundColor: isDarkTheme ? '#292941' : 'white',
        },
        tabBarInactiveTintColor: isDarkTheme ? 'gray' : 'black',
        tabBarActiveTintColor: isDarkTheme ? 'lightblue' : 'blue',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider >
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}