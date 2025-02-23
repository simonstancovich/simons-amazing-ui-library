import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ButtonsScreen from "../screens/ButtonsScreen";
import InputsScreen from "../screens/InputsScreen";

export type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Inputs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "UI Library Home" }}
        />
        <Stack.Screen
          name="Buttons"
          component={ButtonsScreen}
          options={{ title: "Buttons Preview" }}
        />
        <Stack.Screen
          name="Inputs"
          component={InputsScreen}
          options={{ title: "Input Preview" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
