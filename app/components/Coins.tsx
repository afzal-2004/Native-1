import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getExchanges } from "../services/Api";
import { FlatList, Image } from "react-native";
import { Redirect } from "expo-router";

const Coins = () => {
  const [Data, setData] = useState([]);

  const getAllCoin = async () => {
    const data = await getExchanges();
    // console.log(data)
    // console.log(JSON.stringify(data?.data, null, 2));
    setData(data?.data);
  };
  useEffect(() => {
    getAllCoin();
  }, []);

  const RedirectToWeb = (link) => {
    Linking.openURL(`${link}`);
  };

  return (
    <View className="mb-5">
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 7 }}
        columnWrapperStyle={{ gap: 10 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={Data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <View className="flex-1 border border-slate-500 rounded-lg  bg-white w-[150px] h-[200px] justify-center items-center ">
            <Image
              source={{ uri: item?.image }}
              className="w-[50px] h-[50px]"
            />
            <Text className="font-semibold">{`# ${item?.trust_score_rank}`}</Text>
            <Text
              className="font-semibold
            "
            >
              {" "}
              {item?.name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                RedirectToWeb(item?.url);
              }}
            >
              <Text className="text-[15px] bg-blue-500 p-1  rounded-sm mt-2  text-white">
                {" "}
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Coins;
