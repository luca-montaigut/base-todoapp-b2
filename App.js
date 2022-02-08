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

  const handlePress = () => {
    setTasks((previousTasks) => [...previousTasks, text]);
    setText("");
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
          />
          <Button
            title="Add Todo"
            onPress={() => handlePress()}
            disabled={!text}
            style={styles.button}
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => item + index}
          data={tasks}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <Task text={item} />}
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
});
