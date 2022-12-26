import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, setvalue, multiLine, num, area, value }) => {
  const change = (text) => {
    setvalue(text);
  };

  const height = area ? 100 : 50;
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, { height: height }]}
      onChangeText={(text) => {
        change(text);
      }}
      multiline={multiLine}
      numberOfLines={num}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: "silver",
  },
});

export default Input;
