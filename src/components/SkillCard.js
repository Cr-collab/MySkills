import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} >
      <Text style={styles.skill}>{skill.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skill: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    borderRadius: 15,
    marginTop: 20,
    padding: 20,
  },
});
