import DropDownPicker from "react-native-dropdown-picker";
import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import countrylist from "./countrylist";

const Dropdown = ({ setValue, value }) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const list = countrylist?.map((item) => {
      return { label: item, value: item };
    });
    setItem(list);
  }, []);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={item}
      setOpen={setOpen}
      setValue={setValue}
      autoScroll={true}
      setItems={setItem}
      textStyle={{ fontWeight: "bold" }}
      containerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

export default Dropdown;
