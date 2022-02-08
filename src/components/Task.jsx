import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export const Task = ({ task, onDelete, onToogleCompeted }) => {
  return (
    <View style={styles.taskContainer}>
      <Pressable
        style={styles.checkContainer}
        onPress={() => onToogleCompeted()}
      >
        <Image
          source={
            task.isCompleted
              ? require("../assets/checked.png")
              : require("../assets/uncheck.png")
          }
          style={styles.image}
        />
        <Text
          style={task.isCompleted ? styles.todoTextCompleted : styles.todoText}
        >
          {task.value}
        </Text>
      </Pressable>
      <Pressable onPress={() => onDelete()}>
        <Image source={require("../assets/trash.png")} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#fff",
    // borderColor: "#ddd",
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 15,
    padding: 15,
  },
  checkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
  },
  todoText: {
    fontSize: 15,
  },
  todoTextCompleted: {
    fontSize: 15,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  image: {
    width: 48,
    height: 48,
  },
});
