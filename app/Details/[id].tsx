import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { GetCoinDetails } from "../services/Api";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useLocalSearchParams();
  interface CoinDetails {
    market_cap_rank?: number;
    description?: {
      en?: string;
    };
    image?: {
      large?: string;
    };
  }

  const [Details, setDetails] = useState<CoinDetails | null>(null);

  const FetchCoinDetails = async () => {
    const getCoinDetails = await GetCoinDetails(id);
    console.log("This is My Coin Details ", getCoinDetails?.data);
    setDetails(getCoinDetails.data);
  };
  useEffect(() => {
    FetchCoinDetails();
  }, [id]);

  return (
    <View className="bg-yellow-300 w-full h-[100vh] p-5">
      <Text className="font-semibold text-[18px] text-red-500 justify-center flex items-center mt-[3vh]">
        Market Rank #{Details?.market_cap_rank}
      </Text>{" "}
      <View className="mt-[5vh] flex-1 justify-center items-center">
        <Image
          source={{ uri: Details?.image?.large }}
          className="w-[100px] h-[100px] "
          resizeMode="cover"
        />

        <Text className="font-semibold">
          {Details?.description?.en?.split(".")[0] + "."}
        </Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
