import { Agenda, Calendar, CalendarList } from "react-native-calendars";
import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Image } from "@rneui/themed";
import { color } from "@rneui/themed/dist/config";
import { colors } from "../utils/Colors";
import { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const BookScreen = () => {
  const navigation = useNavigation();
  const today = new Date();
  let currentMonth = "";

  // Adds a 0 to the front of the month if it's less than 10
  if (today.getMonth() < 10) {
    currentMonth = "0" + (today.getMonth() + 1).toString();
  } else {
    currentMonth = (today.getMonth() + 1).toString();
  }

  const todayDate =
    today.getFullYear().toString() +
    "-" +
    currentMonth +
    "-" +
    today.getDate().toString();

  const tmrDay = today.getDate() + 1;
  const tmrDate =
    today.getFullYear().toString() +
    "-" +
    currentMonth +
    "-" +
    tmrDay.toString();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [selected, setSelected] = useState(todayDate.toString());
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        selectedColor: "purple",
        selectedTextColor: "white",
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.backgroundImg}
        source={{
          uri: "https://img.freepik.com/free-vector/abstract-splashed-watercolor-textured-background_53876-8753.jpg?w=2000",
        }}
      />
      <Text style={styles.headerText}>Select a Date</Text>
      <Calendar
        initialDate={todayDate}
        minDate={todayDate}
        maxDate={tmrDate}
        hideArrows={true}
        markedDates={marked}
        onDayPress={onDayPress}
        style={{
          marginHorizontal: 15,
        }}
        theme={{}}
      />
      <Text
        style={{
          color: "white",
          fontSize: "18",
          justifyContent: "center",
          alignSelf: "center",
          paddingTop: 10,
        }}
      >
        Time Slot
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: "18",
          justifyContent: "center",
          alignSelf: "center",
          paddingTop: 10,
        }}
      >
        8 am to 5 pm
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{ backgroundColor: "grey", marginHorizontal: 20 }}
          onPress={() => {
            navigation.navigate("Reservations");
          }}
        >
          <Text style={styles.buttonsStyle}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            marginHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate("Select");
          }}
        >
          <Text style={styles.buttonsStyle}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.darkGray,
    flex: 1,
  },
  backgroundImg: {
    width: "100%",
    height: "38.5%",
  },
  headerText: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    position: "absolute",
    top: "7%",
    left: "30%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50,
  },
  buttonsStyle: {
    color: "white",
    fontSize: "18",
    fontWeight: "bold",
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});
