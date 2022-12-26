import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseconfig.js";
import { Text, FlatList, TouchableOpacity } from "react-native";

const DisplayData = ({ navigation }) => {
  const [alldata, setAlldata] = useState([{}]);

  useEffect(() => {
    (async () => {
      try {
        const doc = await getDocs(collection(db, "Students"));

        const data = doc.docs.map((item) => {
          const data = item.data();
          return { ...data, id: item.id };
        });
        setAlldata(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [[], navigation]);

  const select = (item) => {
    const persondata = alldata.filter((data) => item === data.id);

    navigation.navigate("Single", persondata);
  };
  const renderitem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderWidth: 1,
          backgroundColor: "silver",
          padding: 10,
        }}
      >
        <Text style={{ width: 200 }} numberOfLines={1} ellipsizeMode="middle">
          {item.email}
        </Text>
        <Text style={{ width: 50 }} ellipsizeMode="middle" numberOfLines={1}>
          {item.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="middle">
          {item.country}
        </Text>
        <TouchableOpacity
          onPress={() => {
            select(item.id);
          }}
          style={{ backgroundColor: "powderblue", borderRadius: 5 }}
        >
          <Text style={{ fontWeight: "bold" }}>select</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 20 }}>
      {alldata == undefined ? (
        <Text
          style={{
            marginTop: 250,
            fontSize: 40,
            marginLeft: 125,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Data loading....
        </Text>
      ) : alldata.length <= 0 ? (
        <Text
          style={{
            marginTop: 250,
            fontSize: 40,
            marginLeft: 125,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          no data{" "}
        </Text>
      ) : (
        <FlatList
          data={alldata}
          renderItem={renderitem}
          key={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DisplayData;
