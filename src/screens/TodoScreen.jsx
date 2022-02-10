import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

import { Task } from "../components/Task";
import { Title } from "../components/Title";

import { db } from "../../firebase-config";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { useAuth } from "../contexts/AuthProvider";

export const TodoScreen = () => {
  const { currentUser } = useAuth();
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, `users/${currentUser.uid}/tasks`),
        orderBy("createdAt", "desc")
      ),
      (querySnapshot) => {
        const myTasks = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTasks(myTasks);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleAdd = async () => {
    const newTask = {
      value: text,
      isCompleted: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const collectionRef = collection(db, `users/${currentUser.uid}/tasks`);
    await addDoc(collectionRef, newTask);

    setText("");
    setVisibility(false);
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, `users/${currentUser.uid}/tasks/`, id);
    await deleteDoc(docRef);
  };

  const handleToggleComplete = async (id) => {
    const docRef = doc(db, `users/${currentUser.uid}/tasks/`, id);
    const currentTask = tasks.find((task) => task.id === id);
    const updateData = {
      isCompleted: !currentTask.isCompleted,
      updatedAt: serverTimestamp(),
    };
    await updateDoc(docRef, updateData);
  };

  return (
    <>
      <View style={styles.container}>
        <Title />
        {visibility === true && (
          <View style={styles.inputContainer}>
            <TextInput
              value={text}
              placeholder="Enter Todo"
              onChangeText={(newText) => setText(newText)}
              style={styles.input}
            />
            <Pressable
              style={styles.inputAddContainer}
              onPress={() => handleAdd()}
              disabled={!text}
            >
              <Text style={styles.inputAdd}>Add</Text>
            </Pressable>
          </View>
        )}
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
      <Pressable style={styles.addButton} onPress={() => setVisibility(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  inputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    padding: 10,
    marginVertical: 10,
  },
  list: { flexGrow: 1, paddingBottom: 15 },
  input: {
    flex: 1,
    fontSize: 20,
  },
  addButton: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  addButtonText: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
  },
  inputAddContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputAdd: {
    textAlign: "left",
    color: "red",
    fontSize: 20,
  },
});
