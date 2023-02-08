import { StyleSheet } from "react-native";
import { View, ScrollView } from "@/components/Themed";
import { Box, Pressable } from "native-base";
import { RootTabScreenProps } from "~/types";
import React from "react";
import Header from '@/components/Header';
import SymbolChange, { SymbolInfo } from "./components/SymbolChange";
import { wsClient, startMarkPrice, closeMarkPrice } from "@/api/balance";
import { useNavigation } from "@react-navigation/native";
import { WsFormattedMessage, WsRawMessage } from "binance";
import { markets } from "@/constants/Symbol";
// import { start } from "@/api/test";

const initSymbolMap = () => {
  const symbolMap: any = {};
  markets.forEach(symbol => {
    symbolMap[symbol] = {
      symbol,
      price: 0,
      brlPrice: 0,
      change: 0,
      rate: 0
    }
  })

  return symbolMap;
}

export default function Home({ navigation }: RootTabScreenProps<"Market">) {
  const list = [
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      nickname: "尤里",
      time: 1675749385389,
      followed: false,
      title: '这是一个标题哈哈哈哈',
      content: '67万梭哈20231余额10日14:48分 - 2026年1月10 日见',
      comment: 12,
      liked: 55,
      id: 1,
    },
    {
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      nickname: "贱贱",
      time: 1675749385389,
      followed: false,
      title: '这是一个标题哈哈哈哈',
      content: '67万梭哈20231余额10日14:48分 - 2026年1月10 日见',
      comment: 12,
      liked: 55,
      id: 2,
    },
  ];
  const [symbolMap, setSymbolMap] = React.useState(initSymbolMap());

  const symbolList: SymbolInfo[] = React.useMemo(() => {
    return Object.values(symbolMap)
  }, [symbolMap])

  React.useInsertionEffect(() => {
    // start()
    console.log(1111111111)
    startMarkPrice();
    return () => {
      console.log(888888888888888)
      closeMarkPrice();
    }
  }, [])


  const onMarkChange = React.useCallback((data: any) => {
    if (data.eventType === 'markPriceUpdate') {
      console.log('message', data);
    }
  }, [])
  
  React.useEffect(() => {
    wsClient.on('formattedMessage', onMarkChange);
    return () => {
      wsClient.off('formattedMessage', onMarkChange);
    }
  }, [])

  const { navigate } = useNavigation();

  // React.useEffect(() => {
  //   start() 
  // })

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
