import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

import Checkbox from "expo-checkbox";
import { colors } from "../utils/Colors";
import { firebase } from "../../src/firebase/config";
import { useNavigation } from "@react-navigation/native";

const SpaceTemplate = ({ retrieveChecked }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [temp, setTemp] = useState();
  const [tempArr, setTempArr] = useState();
  const [spaces, setSpaces] = useState();

  if (spaces === undefined) {
    setSpaces([
      { title: "Space 1", checked: false, disabled: false },
      { title: "Space 2", checked: false, disabled: false },
      { title: "Space 3", checked: false, disabled: false },
      { title: "Space 4", checked: false, disabled: false },
      { title: "Space 5", checked: false, disabled: false },
      { title: "Space 6", checked: false, disabled: false },
      { title: "Space 7", checked: false, disabled: false },
      { title: "Space 8", checked: false, disabled: false },
      { title: "Space 9", checked: false, disabled: false },
      { title: "Space 10", checked: false, disabled: false },
    ]);
  }

  const db = getDatabase();
  let index = 0;
  if (spaces != undefined) {
    spaces.forEach((space) => {
      const reference = ref(db, "todaysSpaces/" + spaces[index].title);
      onValue(reference, (snapshot) => {
        // console.log("Space " + (index + 1) + " " + snapshot.val().reserved);
        if (snapshot.val().reserved === true) {
          spaces.splice(index, 1);
        }
      });
      index++;
    });
  }

  useEffect(() => {
    if (tempArr != null) {
      setSpaces(tempArr);
    }
  }, [spaces]);

  const allowOneChecked = (index) => {
    temp[index] = {
      title: temp[index].title,
      checked: !temp[index].checked,
      disabled: false,
    };
    temp.forEach((space) => {
      if (temp[index].checked === true && space.title != temp[index].title) {
        space.disabled = true;
      } else if (temp[index].checked === false) {
        space.disabled = false;
      }
    });
  };

  return (
    <View
      style={{
        backgroundColor: "#1a1c1d",
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        position: "absolute",
        top: "8%",
        bottom: "0%",
        left: "0%",
        right: "0%",
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
                }}
              >
                {item.title}
              </Text>
              <Checkbox
                disabled={item.disabled}
                value={item.checked}
                onValueChange={() => {
                  const index = spaces.findIndex((object) => {
                    return object.title === item.title;
                  });
                  setTemp(spaces);
                  if (temp != undefined) {
                    allowOneChecked(index);
                    setTempArr(temp);
                    retrieveChecked(temp[index]);
                    setSpaces(undefined);
                  }
                }}
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
        key={(item) => item.title}
      />
    </View>
  );
};

export default SpaceTemplate;

const styles = StyleSheet.create({});
