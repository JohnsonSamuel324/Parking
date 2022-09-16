import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import SelectScreen from "../screens/SelectScreen";
import SpaceTemplate from "../components/SpaceTemplate";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigation = useNavigation();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Select" component={SelectScreen} />
        <RootStack.Screen name="Template" component={SpaceTemplate} />

        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
