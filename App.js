import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import { Layout } from "./src/components/Layout";
import { Task } from "./src/components/Task";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [viewInput, setViewInput] = useState(false);

  const handlePress = () => {
    setTasks((previousTasks) => [...previousTasks, text]);
    setText("");
    setViewInput(false);
  };

  return (
    <ImageBackground
      source={require("./src/assets/background.png")}
      resizeMode="cover"
      imageStyle={styles.image}
      style={styles.background}
    >
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleParticule}>My</Text>
            <Text style={styles.titleText}>Todo App</Text>
          </View>
          {viewInput && (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  autoFocus
                  onBlur={() => setViewInput(false)}
                  value={text}
                  placeholder="Enter Todo"
                  onChangeText={(newText) => setText(newText)}
                />
                <Pressable
                  style={styles.addButton}
                  onPress={() => handlePress()}
                >
                  <Text style={styles.addButtonText}>add</Text>
                </Pressable>
              </View>
            </>
          )}
          <FlatList
            keyExtractor={(item, index) => item + index}
            data={tasks}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => <Task text={item} />}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            setViewInput(true);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </Layout>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.1,
  },
  container: {
    paddingHorizontal: "5%",
  },
  titleContainer: { flexDirection: "row", marginVertical: "5%" },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titleParticule: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    padding: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 20,
  },
  list: { flexGrow: 1, paddingBottom: 15 },
  button: {
    position: "absolute",
    right: 10,
    bottom: 30,
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    lineHeight: 50,
    fontSize: 50,
  },
  addButton: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  addButtonText: {
    color: "red",
  },
});
