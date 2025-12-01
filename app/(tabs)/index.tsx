import { Link } from "expo-router";
import { Text, View, StatusBar, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Coins from "../components/Coins";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-yellow-300 p-2">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View className="mt-5 w-[90vw]  ml-[5vw]  ">
        <Image
          source={{
            uri: "https://www.onooks.org/wp-content/uploads/2021/10/coingecko-ooks-coin.png",
          }}
          className=" h-[20vh]   rounded-lg "
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          Welcome to Coin Gecko!
        </Text>
       
        <Coins />
      </View>
    </SafeAreaView>
  );
}
