import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
    setNewSkill("");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Welcome, Cristiano Azevedo </Text>
      <TextInput
        style={styles.input}
        placeholder="New skills"
        placeholderTextColor="#CECECE"
        onChangeText={setNewSkill}
      />

      <Button handleAddNewSkill={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
      {mySkills?.map((skill) => (
        <SkillCard skill={skill} key={skill} />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e27",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  },
});
