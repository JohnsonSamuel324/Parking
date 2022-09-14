import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const BookScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>BookScreen</Text>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
