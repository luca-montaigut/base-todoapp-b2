import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { Layout } from "./src/components/Layout";
import { TodoNavigator } from "./src/navigators/TodoNavigator";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoScreen } from "./src/screens/TodoScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { ROUTES } from "./src/navigators/routes";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <Layout>
      <ImageBackground
        source={require("./src/assets/background.png")}
        resizeMode="cover"
        imageStyle={styles.image}
        style={styles.background}
      >
        <NavigationContainer theme={navTheme}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "red",
              tabBarInactiveTintColor: "black",
            }}
          >
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarLabel: "Accueil",
                tabBarIcon: ({ color, size }) => (
                  <Feather name="home" size={size} color={color} />
                ),
              }}
              name={ROUTES.HOME}
              component={TodoNavigator}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarLabel: "Profil",
                tabBarIcon: ({ color, size }) => (
                  <Feather name="box" size={size} color={color} />
                ),
              }}
              name={ROUTES.PROFILE}
              component={ProfileScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </Layout>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.1,
  },
});
