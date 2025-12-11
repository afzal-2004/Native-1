import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { GetCoinDetails } from "../services/Api";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Details = () => {
  const { id } = useLocalSearchParams();

  interface CoinDetails {
    market_cap_rank?: number;
    name?: string;
    last_updated?: string;

    description?: {
      en?: string;
    };
    image?: {
      large?: string;
    };
    market_data?: {
      current_price?: {
        inr?: number;
        usd?: number;
        eur?: number;
      };
      ath?: {
        inr?: number;
        usd?: number;
        eur?: number;
      };
      ath_change_percentage?: {
        inr?: number;
        usd?: number;
        eur?: number;
      };
      ath_date?: {
        inr?: string;
      };
      atl?: {
        inr?: number;
        usd?: number;
        eur?: number;
      };
      atl_change_percentage?: {
        inr?: number;
        usd?: number;
        eur?: number;
      };
      atl_date?: {
        inr?: string;
      };
    };
  }
  const [Curr, setCurr] = useState("inr");

  const [Details, setDetails] = useState<CoinDetails | null>(null);

  const FetchCoinDetails = async () => {
    const getCoinDetails = await GetCoinDetails(id);
    setDetails(getCoinDetails.data);
  };
  useEffect(() => {
    FetchCoinDetails();
  }, [id]);

  const formattedDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // Example
  return (
    <View className="bg-yellow-300 w-full h-[100vh] p-5 text-center">
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          margin: 10,
          marginTop: 50,
          justifyContent: "center",
        }}
      >
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
      <Text className="font-semibold text-[20px] text-red-500  text-center mt-[3vh]">
        Market Rank #{Details?.market_cap_rank ?? "N/A"}
      </Text>
      <Text className="font-semibold text-[18px] text-red-500 justify-center flex items-center mt-[3vh]">
        Latest Update On :
        {Details?.last_updated ? formattedDate(Details.last_updated) : "N/A"}
      </Text>
      <View className="mt-[5vh] flex-1 justify-center items-center">
        <Image
          source={{ uri: Details?.image?.large }}
          className="w-[200px] h-[200px] "
          resizeMode="cover"
        />
        <Text className="font-bold text-[20px] text-green-500 justify-center flex items-center mt-[3vh]">
          {Details?.name}
        </Text>
        <Text className="font-bold text-[18px] text-green-500 justify-center flex items-center mt-[3vh]">
          Current Price = 
          {Curr == "inr"
            ? `₹${Details?.market_data?.current_price?.inr}`
            : Curr == "usd"
            ? `$${Details?.market_data?.current_price?.usd}`
            : `€${Details?.market_data?.current_price?.eur}`}
        </Text>
        <View className="flex-row  justify-between items-center  w-full">
          <Text className="text-green-500 flex flex-row items-center gap-2">
            <MaterialCommunityIcons
              name="arrow-up-drop-circle"
              color="green"
              size={24}
            />
            {Curr == "inr"
              ? `${Details?.market_data?.atl_change_percentage?.inr?.toFixed(
                  3
                )}%`
              : Curr == "usd"
              ? `${Details?.market_data?.atl_change_percentage?.usd?.toFixed(
                  3
                )}%`
              : `${Details?.market_data?.atl_change_percentage?.eur?.toFixed(
                  3
                )}%`}
          </Text>
          <Text className="text-green-500 flex flex-row items-center gap-2">
           
            <MaterialCommunityIcons
              name="arrow-down-drop-circle"
              color="#cf1515"
              size={24}
            />
            {Curr == "inr"
              ? `${Details?.market_data?.ath_change_percentage?.inr?.toFixed(
                  3
                )}%`
              : Curr == "usd"
              ? `${Details?.market_data?.ath_change_percentage?.usd?.toFixed(
                  3
                )}%`
              : `${Details?.market_data?.ath_change_percentage?.eur?.toFixed(
                  3
                )}%`}
          </Text>
        </View>
        <View className="font-bold  flex-row text-[18px] text-green-500 justify-between flex items-center mt-[3vh] w-full   ">
          <Text className="text-green-500">Heigest Price </Text>
          <Text className="text-green-500">
            {Curr == "inr"
              ? `₹${Details?.market_data?.ath?.inr}`
              : Curr == "usd"
              ? `$${Details?.market_data?.ath?.usd}`
              : `€${Details?.market_data?.ath?.eur}`}
          </Text>
        </View>
        <View className="font-bold  flex-row text-[18px] text-green-500 justify-between flex items-center mt-[3vh] w-full  ">
          <Text className="text-green-500">Last Height price Date </Text>
          <Text className="text-green-500">
           
            {Details?.market_data?.ath_date?.inr
              ? formattedDate(Details?.market_data?.ath_date?.inr)
              : "NA"}
          </Text>
        </View>
        <View className="font-bold  flex-row text-[18px] text-green-500 justify-between flex items-center mt-[3vh] w-full   ">
          <Text className="text-red-500">Lowest Price </Text>
          <Text className="text-red-500">
            {Curr == "inr"
              ? `₹${Details?.market_data?.atl?.inr}`
              : Curr == "usd"
              ? `$${Details?.market_data?.atl?.usd}`
              : `€${Details?.market_data?.atl?.eur}`}
            {/* ₹ {Details?.market_data?.atl?.inr} */}
          </Text>
        </View>
        <View className="font-bold  flex-row text-[18px] text-green-500 justify-between flex items-center mt-[3vh] w-full  ">
          <Text className="text-red-500">Last Lowest price Date </Text>
          <Text className="text-red-500">
           
            {Details?.market_data?.atl_date?.inr
              ? formattedDate(Details?.market_data?.atl_date?.inr)
              : "NA"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
