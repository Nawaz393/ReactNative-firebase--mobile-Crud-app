import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, LogBox } from "react-native";
import Input from "../Components/input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseconfig.js";
import RadioButtonRN from "radio-buttons-react-native";
import Dropdown from "../Components/Dropdown";
import Check from "../Components/Check";
import { Button } from "../Components/Button";

const AddData = ({ navigation }) => {
  const [gender, setGender] = useState("");
  const [value, setValue] = useState(null);
  const [physics, setPhysics] = useState(false);
  const [chemistry, setchemistry] = useState(false);
  const [maths, setMaths] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, SetAddress] = useState("");
  const [skills, Setskills] = useState("");

  const data = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ];

  const handleSubmit = async () => {
    if (
      email.length < 10 ||
      name.length < 5 ||
      gender.length < 0
    ) {
      alert("Please fill fields");
      return;
    }
    const data = {
      email: email,
      name: name,
      country: value,
      gender: gender,
      subject: {
        physics: physics ? "yes" : "N0",
        chemistry: chemistry ? "yes" : "N0",
        maths: maths ? "yes" : "No",
      },

      address: address,
      skills: skills,
    };
    try {
      const doc = await addDoc(collection(db, "Students"), data);
      console.log("document written with id " + doc.id);
      setEmail("");
      setName("");
      setValue(null);
      setGender("");
      setPhysics(false);
      setchemistry(false);
      setMaths(false);
      SetAddress("");
      Setskills("");
      setGender("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested","Possible unhandled Exception"]);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Input placeholder="Email" setvalue={setEmail} value={email} />
        <Input placeholder="Name" setvalue={setName} value={name} />
        <Dropdown setValue={setValue} value={value} />
        <RadioButtonRN
          data={data}
          style={styles.radio}
          selectedBtn={(e) => {
            setGender(e.value);
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Check ischecked={physics} setIsChecked={setPhysics} />
            <Text>physics</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Check ischecked={chemistry} setIsChecked={setchemistry} />
            <Text>chemistry</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Check ischecked={maths} setIsChecked={setMaths} />
            <Text>Maths</Text>
          </View>
        </View>

        <Input
          placeholder="skills"
          multiLine={true}
          num={4}
          area={true}
          setvalue={Setskills}
          value={skills}
        />
        <Input
          placeholder="Address"
          multiLine={true}
          num={4}
          area={true}
          setvalue={SetAddress}
          value={address}
        />
        <Button name="Submit" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  radio: {
    margin: 10,
  },
});

export default AddData;
