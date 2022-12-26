import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "../Components/Button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseconfig.js";
const SinglePersondata = ({ route, navigation }) => {
  const data = route.params[0];
  const update = () => {
    navigation.navigate("update", data);
  };
  const Delete = async () => {
    try {
      const ref = await deleteDoc(doc(db, "Students", data.id));

      alert("doc deleted");

      navigation.navigate("ReadData");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {data.email}</Text>
      <Text style={styles.text}>Name: {data.name}</Text>
      <Text style={styles.text}>Country: {data.country}</Text>
      <Text style={styles.text}>Gender: {data.gender}</Text>
      <Text style={styles.text}>
        Subjects: {data.subject.physics.includes("yes") ? "Phy," : ""}
        {data.subject.chemistry.includes("yes") ? "Chem," : ""}
        {data.subject.maths.includes("yes") ? "Math" : ""}
      </Text>
      <Text style={styles.text}>Address :{data.address}</Text>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Button name="Update" onPress={update} />
        <Button name="Delete" onPress={Delete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },

  text: {
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default SinglePersondata;
