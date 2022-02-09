import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { Layout } from "./src/components/Layout";
import { TabNavigator } from "./src/navigators/TabNavigator";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/contexts/AuthProvider";
import { AuthNavigator } from "./src/navigators/AuthNavigator";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <ImageBackground
          source={require("./src/assets/background.png")}
          resizeMode="cover"
          imageStyle={styles.image}
          style={styles.background}
        >
          <NavigationContainer theme={navTheme}>
            <Root />
          </NavigationContainer>
        </ImageBackground>
      </Layout>
    </AuthProvider>
  );
}

const Root = () => {
  const { currentUser } = useAuth();

  return currentUser !== null ? <TabNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.1,
  },
});
