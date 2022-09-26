import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getDatabase, onValue, ref, set } from "firebase/database";

import SpaceTemplate from "../components/SpaceTemplate";
import { colors } from "../utils/Colors";
import { firebase } from "../../src/firebase/config";
import { useNavigation } from "@react-navigation/native";

const SelectScreen = () => {
  const navigation = useNavigation();
  const db = getDatabase();
  const [selSpace, setSelSpace] = useState(null);

  // Variable used to grab which space is grabbed from the child component
  const retrieveChecked = (space) => {
    if (space.checked === true) {
      setSelSpace(space);
    } else {
      setSelSpace(null);
    }
  };

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
            top: "3%",
          }}
        >
          09/16/2022 8:00 AM - 09/16/2022 5:00 PM
        </Text>
        <SpaceTemplate retrieveChecked={retrieveChecked} />
      </View>
      <View
        style={{
          position: "absolute",
          top: "80%",
          right: "0%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "gray",
            width: "35%",
            height: "200%",
            justifyContent: "center",
            borderRadius: 5,
          }}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "20",
              fontWeight: "bold",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            width: "45%",
            height: "200%",
            justifyContent: "center",
            borderRadius: 5,
            marginLeft: "10%",
          }}
          disabled={selSpace === null ? true : false}
          onPress={() => {
            // Only does something if space is checked
            if (selSpace != null) {
              navigation.navigate("Dashboard");
              const db = getDatabase();
              const reference = ref(db, "todaysSpaces/" + selSpace.title);
              set(reference, {
                reserved: true,
              });
            }
            // Else does not run anything when pressed
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "20",
              fontWeight: "bold",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
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
