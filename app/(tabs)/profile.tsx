import { StyleSheet, Text, View } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View className="flex-1  justify-center items-center p-2 bg-yellow-300">
      <Text className="text-[20px] text-red-500 font-semibold">
        Profile view{" "}
      </Text>
      {/* <Link href="/OnBoard">On Board Screen</Link> */}
      {/* <Link href="/movie/1">Movie</Link> */}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
