/* eslint-disable import/no-unresolved */
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
        tabBarStyle: {
          backgroundColor: "#35ba33",
          height: 55,
          marginBottom: 12,
          margin: 5,
          borderRadius: 25,
          position: "absolute",
          left: 15,
          right: 15,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={[focused && styles.customContainer]}>
              <AntDesign name="home" size={focused ? 35 : 30} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[focused && styles.customContainer]}>
              <FontAwesome
                name={focused ? "save" : "save"}
                size={focused ? 35 : 30}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={[focused && styles.customContainer]}>
              <EvilIcons
                name={focused ? "user" : "user"}
                size={focused ? 35 : 30}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  customContainer: {
    backgroundColor: "#c27fce", // Tailwind bg-blue-500
    flex: 1,
    height: "100%",
    minWidth: 100,
    minHeight: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999, // Full rounded
  },
});
