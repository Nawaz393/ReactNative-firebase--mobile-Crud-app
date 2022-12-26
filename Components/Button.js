import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Button = ({ onPress, name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    borderRadius: 30,
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    backgroundColor: "brown",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
export { Button };
