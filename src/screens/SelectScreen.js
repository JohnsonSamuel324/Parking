import { Image, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const SelectScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.backgroundImg}
        source={{
          uri: "https://img.freepik.com/free-vector/abstract-splashed-watercolor-textured-background_53876-8753.jpg?w=2000",
        }}
      />
      <Text style={styles.headerText}>Select a Space</Text>
      <View style={styles.listContainer}>
        <Text
          style={{
            color: "white",
            fontSize: "18",
            position: "absolute",
            top: "5%",
          }}
        >
          09/16/2022 8:00 AM - 09/16/2022 5:00 PM
        </Text>
      </View>
    </View>
  );
};

export default SelectScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.darkGray,
    flex: 1,
  },
  backgroundImg: {
    width: "100%",
    height: "15%",
  },
  headerText: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    position: "absolute",
    top: "7%",
    alignSelf: "center",
    justifyContent: "center",
  },
  listContainer: {
    backgroundColor: "#1a1c1d",
    position: "absolute",
    top: "25%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 450,
    marginHorizontal: 15,
    borderRadius: 25,
  },
});
