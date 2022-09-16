import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Checkbox from "expo-checkbox";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const SpaceTemplate = ({ spaceNum }) => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#1a1c1d",
        borderBottomWidth: 2,
        borderBottomColor: "grey",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
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
          value={isChecked}
          onValueChange={setChecked}
          size={24}
          style={{
            marginLeft: "auto",
            marginRight: "5%",
            width: 28,
            height: 28,
          }}
        />
      </View>
      <Text
        style={{
          color: "white",
        }}
      >
        This is subtext
      </Text>
    </SafeAreaView>
  );
};

export default SpaceTemplate;

const styles = StyleSheet.create({});
