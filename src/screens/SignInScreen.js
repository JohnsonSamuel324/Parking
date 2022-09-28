import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("sinistersam0000@gmail.com");
  const [password, setPassword] = useState("Testing123");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        await AsyncStorage.setItem("displayName", user.displayName);
        await AsyncStorage.setItem("email", user.email);
        navigation.navigate("Main");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        Parking Reservations
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="white"
        placeholder="Email"
        value={email}
        onChangeText={(emailInput) => setEmail(emailInput)}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="white"
        placeholder="Password"
        value={password}
        password={true}
        secureTextEntry="true"
        onChangeText={(passwordInput) => setPassword(passwordInput)}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2%",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{ paddingLeft: "1%" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              color: colors.linkBlue,
              fontSize: 16,
              textDecorationLine: "underline",
            }}
          >
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignIn}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            marginTop: "8%",
            backgroundColor: colors.linkBlue,
            paddingHorizontal: "5%",
            paddingVertical: "2%",
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
