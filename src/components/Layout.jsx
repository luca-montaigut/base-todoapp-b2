import {
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
} from "react-native";
import { useTheme } from "../contexts/ThemeProvider";

export const Layout = ({ children }) => {
  const { theme, isDarkMode, setIsDarkMode } = useTheme();

  console.log(theme);
  if (Platform.OS === "android") {
    return (
      <View style={styles(theme).container}>
        <StatusBar barStyle="default" />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          value={isDarkMode}
        />
        {children}
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles(theme).container}>
        <StatusBar barStyle="default" />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          value={isDarkMode}
        />
        {children}
      </SafeAreaView>
    );
  }
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
