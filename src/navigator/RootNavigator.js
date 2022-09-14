import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigation = useNavigation();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
