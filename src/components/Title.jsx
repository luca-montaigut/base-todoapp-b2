import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeProvider";

export const Title = () => {
  const { theme } = useTheme();
  return (
    <View style={styles(theme).titleContainer}>
      <Text style={styles(theme).particule}>My </Text>
      <Text style={styles(theme).body}>TodoApp</Text>
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    titleContainer: {
      flexDirection: "row",
    },
    particule: {
      color: theme.colors.primary,
      fontSize: 40,
      fontWeight: "bold",
    },
    body: {
      color: theme.colors.textColor,
      fontSize: 40,
      fontWeight: "bold",
    },
  });
