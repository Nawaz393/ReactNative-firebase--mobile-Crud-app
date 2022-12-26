import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Components/input";
import { Button } from "../Components/Button";
import { db } from "../firebaseconfig";
import { getDocs, collection, query, where } from "firebase/firestore";
const Search = ({ navigation }) => {
  const [searchvalue, Setsearchvalue] = useState("");
  const search = async () => {
    const searchdata = [];
    try {
      const ref = collection(db, "Students");
      const q = query(ref, where("email", "==", searchvalue));
      const docu = await getDocs(q);
      if (docu.empty) {
        alert("no user found ");
        navigation.navigate("ReadData");
      } else {
        docu.forEach((data) => {
          searchdata.push(data.data());
        });
        navigation.navigate("Single", searchdata);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Input
        placeholder="Email"
        setvalue={Setsearchvalue}
        value={searchvalue}
      />
      <Button name="Search" onPress={search} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
