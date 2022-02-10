import React, { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
} from "react-native";

import { Layout } from "./src/components/Layout";
import { TabNavigator } from "./src/navigators/TabNavigator";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/contexts/AuthProvider";
import { AuthNavigator } from "./src/navigators/AuthNavigator";
import { Title } from "./src/components/Title";

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
  const { currentUser, loading, error, cleanError } = useAuth();

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{error}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => cleanError()}
              >
                <Text style={styles.textStyle}>Got it !</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={"red"} />
      </View>
    );
  }

  return currentUser !== null ? <TabNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.1,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
