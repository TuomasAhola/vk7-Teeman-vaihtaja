import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainAppbar from './components/MainAppbar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Settings from './components/Settings';
import Home from './screens/Home';
import ThemeProvider from './components/ThemeProvider';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
     <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{header: (props) => 
            <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />
          }}
        >
          <Stack.Screen name="Home">
            {() =>
            <Home />
            }
          </Stack.Screen>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
     </ThemeProvider>
    </PaperProvider>
  );
}
