import {
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

export const Layout = ({ children }) => {
  if (Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        {children}
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        {children}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
