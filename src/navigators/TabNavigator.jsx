import React from "react";

import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigator } from "./TodoNavigator";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ROUTES } from "./routes";

const Tab = createBottomTabNavigator();

export const TabNavigator = ({ onLogout }) => {
  return (
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
  );
};
