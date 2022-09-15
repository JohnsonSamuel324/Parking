import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Checkbox from "expo-checkbox";

const SpaceTemplate = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: "24", fontWeight: "bold", paddingBottom: 2 }}>
          Space 1
        </Text>
        <Checkbox value={isChecked} onValueChange={setChecked} style={{}} />
      </View>

      <Text>This is subtext</Text>
    </View>
  );
};

export default SpaceTemplate;

const styles = StyleSheet.create({});
