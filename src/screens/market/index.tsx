import { StyleSheet } from "react-native";
import { View, ScrollView } from "@/components/Themed";
import { Box, Pressable } from "native-base";
import { RootTabScreenProps } from "~/types";
import React from "react";
import Header from '@/components/Header';
import SymbolChange from "./components/SymbolChange";
import { wsClient, startMarkPrice, closeMarkPrice } from "@/api/balance";
import { useNavigation } from "@react-navigation/native";
import { markets } from "@/constants/Symbol";
import { useMarketList, useSubscribeMarkPrice } from "@/state/symbol/hooks";

export default function Home({ navigation }: RootTabScreenProps<"Market">) {


  const { navigate } = useNavigation();

  useSubscribeMarkPrice()

  const symbolList = useMarketList()
  
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.container}>
        <Box mt="2">
          {
            symbolList.map(item => {
              return <Pressable key={item.symbol} onPress={() => {
                navigate('Kline')
              }}>
                <SymbolChange  info={item} />
              </Pressable>
            })
          }
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
