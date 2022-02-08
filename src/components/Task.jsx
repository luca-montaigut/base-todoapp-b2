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
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    marginTop: 15,
    padding: 15,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  todoText: {
    marginLeft: 10,
    fontSize: 15,
    maxWidth: "60%",
    fontSize: 20,
  },
  todoTextCompleted: {
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    maxWidth: "60%",
  },
  image: {
    width: 32,
    height: 32,
  },
});
