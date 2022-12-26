import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../Components/input";
import { Button } from "../Components/Button";
import { updateDoc ,doc} from "firebase/firestore";
import { db } from "../firebaseconfig.js";
const Update = ({ route, navigation }) => {
  const data = route.params;
  const [uname, setUname] = useState("");
  const [uaddress, setUAddress] = useState("");
  useEffect(() => {
    setUname(data.name);
    setUAddress(data.address);
  }, []);
  const Update = async () => {
    const ndata = { name: uname, address: uaddress };
    // console.log(ndata);
    try {
      const ref = await updateDoc(doc(db, "Students", data.id), ndata);

      alert("Updated student data");
      navigation.navigate("ReadData")
      
    } catch (error) {
      console.log(error);
    }
  };
  const Back = () => {
    navigation.navigate("ReadData");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ padding: 10 }}>Email:{data.email}</Text>
      <Input placeholder="Name" value={uname} setvalue={setUname} />
      <Input
        placeholder="Address"
        multiLine={true}
        area={true}
        value={uaddress}
        setvalue={setUAddress}
      />
      <View style={{ flexDirection: "row", padding: 8 }}>
        <Button name="Update" onPress={Update} />
        <Button name="Back" onPress={Back} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Update;
