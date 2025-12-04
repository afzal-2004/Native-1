/* eslint-disable react-hooks/rules-of-hooks */
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
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
      setfetchingAll(GetAllCoinsByPage?.data);
      console.log(GetAllCoinsByPage?.data);
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
      <View className="mt-[5vh]">
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

                {Curr == "inr" ? <Text>{`₹${item?.current_price}`}</Text> : ""}
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

// ath: 11187013;
// ath_change_percentage: -25.20983;
// ath_date: "2025-10-06T18:57:42.558Z";
// atl: 3993.42;
// atl_change_percentage: 209414.33545;
// atl_date: "2013-07-05T00:00:00.000Z";
// circulating_supply: 19957175;
// current_price: 8384276;
// fully_diluted_valuation: 167353101084849;
// high_24h: 8480198;
// id: "bitcoin";
// image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400";
// last_updated: "2025-12-03T18:00:12.111Z";
// low_24h: 8167044;
// market_cap: 167353101084849;
// market_cap_change_24h: 3120297748219;
// market_cap_change_percentage_24h: 1.89992;
// market_cap_rank: 1;
// max_supply: 21000000;
// name: "Bitcoin";
// price_change_24h: 155712;
// price_change_percentage_24h: 1.89233;
// roi: null;
// symbol: "btc";
// total_supply: 19957175;
// total_volume: 7576495869633;
