import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SearchScreen from "./src/screen/SearchScreen";
import HomeScreen from "./src/screen/HomeScreen";
import ResultShowScreen from "./src/screen/ResultsShowScreen";

// Stack
const Stack = createNativeStackNavigator();

const SearchScreenOptions = {
  title: 'BusinessSearch',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={SearchScreenOptions} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="ResultShowScreen" component={ResultShowScreen} options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

