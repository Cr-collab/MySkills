import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greenting, setGreenting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills((oldState) => [...oldState, data]);
    setNewSkill("");
  }

  useEffect(() => {
    const current = new Date().getHours();

    const mornig = current < 12;
    const afternoon = current >  12 && current < 18;

    if (mornig) {
      setGreenting("Good Morning");
    } else if (afternoon) {
      setGreenting("Good Afternoon");
    } else {
      setGreenting("Good Night");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Welcome, Cristiano Azevedo </Text>
      <Text style={styles.greeting}> {greenting} </Text>
      <TextInput
        style={styles.input}
        placeholder="New skills"
        placeholderTextColor="#CECECE"
        onChangeText={setNewSkill}
      />

      <Button handleAddNewSkill={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
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
  greeting: {
    color: "#fff",
  }
});
