import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("Null");

  useEffect(() => {
    (async () => {
      try {
        setDisplayName(await AsyncStorage.getItem("displayName"));
      } catch (error) {
        console.log(error);
        setDisplayName("");
      }
    })();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ backgroundColor: colors.darkGray, flex: 1 }}>
      <Image
        style={styles.backgroundImg}
        source={{
          uri: "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1506521781263-d8422e82f27a-1920w.jpg",
        }}
      />
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.nameText}>
        {displayName.substring(0, displayName.indexOf(" "))}
      </Text>
      <View style={styles.upcomingContainer}>
        <Text style={styles.headerText}>Upcoming Reservations</Text>
        <Text style={styles.upcomingText}>No upcoming reservations</Text>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "30%",
  },
  upcomingContainer: {
    backgroundColor: "#1a1c1d",
    position: "absolute",
    top: "35%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 450,
    marginHorizontal: 15,
    borderRadius: 25,
  },
  headerText: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    position: "absolute",
    top: 20,
  },
  upcomingText: {
    color: "white",
    fontSize: "18px",
  },
  welcomeText: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    position: "absolute",
    top: "8%",
    left: "45%",
  },
  nameText: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    position: "absolute",
    top: "12%",
    left: "45.5%",
  },
});
