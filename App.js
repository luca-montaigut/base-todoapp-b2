import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { Layout } from "./src/components/Layout";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  return (
    <Layout>
      <ImageBackground
        source={require("./src/assets/background.png")}
        resizeMode="cover"
      >
        <TodoScreen />
      </ImageBackground>
    </Layout>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
