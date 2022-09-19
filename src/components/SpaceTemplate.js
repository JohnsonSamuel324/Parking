import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import Checkbox from "expo-checkbox";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const SpaceTemplate = ({ spaceNum, id, setChecked }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const spaces = [
    { title: "Space 1", checked: false },
    { title: "Space 2", checked: false },
    { title: "Space 3", checked: false },
    { title: "Space 4", checked: false },
    { title: "Space 5", checked: false },
    { title: "Space 6", checked: false },
    { title: "Space 7", checked: false },
    { title: "Space 8", checked: false },
    { title: "Space 9", checked: false },
    { title: "Space 10", checked: false },
  ];

  return (
    <View
      style={{
        backgroundColor: "#1a1c1d",
        borderBottomWidth: 2,
        borderBottomColor: "grey",
      }}
    >
      <FlatList
        data={spaces}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <Text
                style={{
                  color: "white",
                  fontSize: "24",
                  fontWeight: "bold",
                  paddingBottom: 2,
                  marginRight: "auto",
                }}
              >
                {spaceNum}
              </Text>
              <Checkbox
                value={item.checked}
                onValueChange={(item.checked = true)}
                size={24}
                style={{
                  marginLeft: "auto",
                  position: "absolute",
                  right: "8%",
                  top: "20%",
                  width: 32,
                  height: 32,
                }}
              />
              <Text
                style={{
                  color: "white",
                }}
              >
                This is subtext
              </Text>
            </ScrollView>
          );
        }}
        keyExtractor={(item) => item.title}
        style={{
          position: "absolute",
          top: "10%",
          left: "1%",
          right: "0%",
          bottom: "0%",
        }}
      />
    </View>
  );
};

export default SpaceTemplate;

const styles = StyleSheet.create({});
