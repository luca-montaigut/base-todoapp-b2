import { View, Text, StyleSheet } from "react-native";

export const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.particule}>My </Text>
      <Text style={styles.body}>TodoApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
  },
  particule: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
  body: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
  },
});
