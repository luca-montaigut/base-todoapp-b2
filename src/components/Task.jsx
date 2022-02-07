import { View, Text, StyleSheet } from "react-native";

export const Task = ({ text }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.todoText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  todoText: {
    fontSize: 15,
  },
});
