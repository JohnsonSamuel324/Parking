import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

import { TextInput } from "react-native";
import { auth } from "../../src/firebase/config";
import { colors } from "../utils/Colors";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        // console.log(user.email);
        updateProfile(user, {
          displayName: fName + " " + lName,
        })
          .then(() => {
            navigation.navigate("SignIn");
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        placeholder="First name"
        placeholderTextColor="white"
        value={fName}
        onChangeText={(fNameInput) => setFName(fNameInput)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor="white"
        value={lName}
        onChangeText={(lNameInput) => setLName(lNameInput)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={(emailInput) => setEmail(emailInput)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        autoCapitalize={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(passwordInput) => setPassword(passwordInput)}
      />
      <TouchableOpacity
        disabled={(fName, lName, email, password === "") ? true : false}
        onPress={handleSignUp}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            marginVertical: "5%",
            paddingVertical: "2%",
            paddingHorizontal: "5%",
            backgroundColor: colors.linkBlue,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.darkGray,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "white",
    height: "8%",
    width: "65%",
    borderBottomWidth: 1,
    borderColor: "white",
    paddingTop: "8%",
    fontSize: 20,
  },
});
