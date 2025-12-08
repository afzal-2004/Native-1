/* eslint-disable react-hooks/rules-of-hooks */
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useActionState } from "react";
import { useEffect, useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { getCoins } from "../services/Api";
import { Link } from "expo-router";

const saved = () => {
  const [fetchingAll, setfetchingAll] = useState([]);
  const [Curr, setCurr] = useState("inr");

  const [Num, setNum] = useState(1);
  const fethAllCoins = async () => {
    try {
      const GetAllCoinsByPage = await getCoins(Curr, Num);
      setfetchingAll(GetAllCoinsByPage?.data);
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
      <View style={{ flexDirection: "row", gap: 5, margin: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <BouncyCheckbox
            isChecked={Curr == "inr"}
            fillColor="green"
            size={30}
            useBuiltInState={false}
            iconStyle={{ borderColor: "green" }}
            onPress={(checked: boolean) => {
              setCurr("inr");
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>INR</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <BouncyCheckbox
            isChecked={Curr == "usd"}
            fillColor="green"
            size={30}
            useBuiltInState={false}
            iconStyle={{ borderColor: "green" }}
            onPress={(checked: boolean) => {
              setCurr("usd");
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>USD</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <BouncyCheckbox
            isChecked={Curr == "eur"}
            fillColor="green"
            size={30}
            useBuiltInState={false}
            iconStyle={{ borderColor: "green" }}
            onPress={(checked: boolean) => {
              setCurr("eur");
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>ERO</Text>
        </View>
      </View>

      <View className="mt-[5vh] mb-[2vh]">
        <FlatList
          data={fetchingAll}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id?.toString()}
          columnWrapperStyle={{ gap: 10 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item }) => (
            <View className="w-[150px] h-[200px] bg-white border border-slate-500 rounded-xl  ">
              <View className=" flex-1  h-[100px]  justify-center items-center p-3">
                <Image
                  source={{ uri: item?.image }}
                  className="w-[50px] h-[50px] bg-gray-200"
                  resizeMode="cover"
                />

                <Text className="font-semibold">
                  {" "}
                  Market Rank#{item?.market_cap_rank}
                </Text>

                <Text>{item?.symbol}</Text>

                <Text className="font-semibold">{item?.name}</Text>

                {Curr == "inr" ? (
                  <Text>{`₹${item?.current_price}`}</Text>
                ) : Curr == "usd" ? (
                  <Text>{`$${item?.current_price}`}</Text>
                ) : (
                  <Text>{`€${item?.current_price}`}</Text>
                )}
                <Link href={`/Details/${item?.id}`}>
                  <Text style={{ fontSize: 12, color: "blue" }}>
                    view Details ....
                  </Text>
                </Link>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default saved;

const styles = StyleSheet.create({});
