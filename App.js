import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AddData from "./Screens/AddData.js";
import DisplayData from "./Screens/DisplayData.js";
import SinglePersondata from "./Screens/SinglePersondata.js";
import Update from "./Screens/Update.js";
import Search from "./Screens/Search";
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Adddata" component={AddData} />
        <Drawer.Screen name="ReadData" component={DisplayData} />
        <Drawer.Screen
          name="Single"
          component={SinglePersondata}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen name="Search" component={Search} />

        <Drawer.Screen
          name="update"
          component={Update}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
