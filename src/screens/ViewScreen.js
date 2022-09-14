import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";

import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const ViewScreen = () => {
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
      <Text style={styles.headerText}>My Reservations</Text>
      <View style={styles.upcomingContainer}>
        <View style={styles.tabView}>
          <TouchableOpacity>
            <Text style={styles.tabViewText}>UPCOMING</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabViewText}>PREVIOUS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViewScreen;

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
    left: "25%",
  },
  upcomingContainer: {
    backgroundColor: "#1a1c1d",
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    marginHorizontal: 15,
    borderRadius: 25,
  },
  tabView: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    left: 25,
  },
  tabViewText: {
    color: "white",
    fontSize: "16px",
    paddingRight: 40,
  },
});
