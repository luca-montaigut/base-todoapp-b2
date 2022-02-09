import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useAuth } from "../contexts/AuthProvider";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login } = useAuth();

  return (
    <View style={styles.container}>
      <Text>LOGIN or REGISTER</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        color="red"
        onPress={() => login(email, password)}
        disabled={!email || !password}
      />
      <Button
        title="Register"
        color="blue"
        onPress={() => register(email, password)}
        disabled={!email || !password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    padding: 8,
    margin: 16,
    width: "80%",
  },
});
