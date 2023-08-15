import WeatherScreen from './Components/WeatherScreen.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './Components/ZipCodeScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return ( 
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={ZipCodeScreen} />
              <Stack.Screen name="Weather" component={WeatherScreen} />
          </Stack.Navigator>
      </NavigationContainer> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
