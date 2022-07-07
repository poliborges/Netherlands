/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { PostDetailScreen } from "./src/screens/PostDetailScreen/PostDetailScreen";
import { store } from "./src/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ 
              headerStyle: { 
                backgroundColor: '#FF8C00',
              },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={PostDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
