import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { Layout } from "./src/components/Layout";
import { Task } from "./src/components/Task";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    const newTask = {
      id: Math.floor(Math.random() * 100000),
      value: text,
      isCompleted: false,
    };
    setTasks((previousTasks) => [...previousTasks, newTask]);
    setText("");
  };

  const handleDelete = (id) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text>My Todo App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            placeholder="Enter Todo"
            onChangeText={(newText) => setText(newText)}
            style={styles.input}
          />
          <Button
            title="Add Todo"
            onPress={() => handleAdd()}
            disabled={!text}
            style={styles.button}
          />
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={tasks}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Task
              task={item}
              onDelete={() => handleDelete(item.id)}
              onToogleCompeted={() => handleToggleComplete(item.id)}
            />
          )}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    padding: 10,
  },
  list: { flexGrow: 1, paddingBottom: 15 },
  input: {
    flex: 1,
  },
});
