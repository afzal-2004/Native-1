/* eslint-disable react-hooks/rules-of-hooks */
import { StyleSheet, Text, View } from "react-native";
import React, { useActionState } from "react";
import { useEffect, useState } from "react";
import { getCoins } from "../services/Api";

const saved = () => {
  const [fetchingAll, setfetchingAll] = useState([]);
  const [Curr, setCurr] = useState("inr");
  const [Num, setNum] = useState(1);
  const fethAllCoins = async () => {
    try {
      const GetAllCoinsByPage = await getCoins(Curr, Num);
      console.log(
        "This My All geting Page datafrom Api Side ",
        GetAllCoinsByPage
      );
      console.log(JSON.stringify(GetAllCoinsByPage, null, 2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fethAllCoins();
  }, [Curr, Num]);

  return (
    <View className=" flex items-center   p-2 bg-yellow-300 w-[100vw] h-[100vh]">
      <Text className="text-[20px] i text-red-500 font-semibold mt-[5vh]">
        All Coins
      </Text>
    </View>
  );
};

export default saved;

const styles = StyleSheet.create({});
