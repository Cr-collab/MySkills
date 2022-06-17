import React from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export function Button({handleAddNewSkill}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
