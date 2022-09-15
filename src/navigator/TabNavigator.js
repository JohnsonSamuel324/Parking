import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import BookScreen from "../screens/BookScreen";
import DashboardScreen from "../screens/DashboardScreen";
import { Icon } from "@rneui/themed";
import SelectScreen from "../screens/SelectScreen";
import ViewScreen from "../screens/ViewScreen";
import { colors } from "../utils/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Dashboard") {
            return (
              <Icon
                name="list"
                type="entypo"
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          } else if (route.name === "Reservations") {
            return (
              <Icon
                name="person"
                type="Octicons"
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          } else if (route.name === "Book") {
            return (
              <Icon
                name="plus"
                type="entypo"
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          }
        },
        tabBarStyle: [
          {
            backgroundColor: colors.darkGray,
            borderTopColor: "gray",
          },
        ],
      })}
    >
      <Tab.Screen name="Book" component={BookScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Reservations" component={ViewScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
