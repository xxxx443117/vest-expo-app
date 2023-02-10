import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import { View, ScrollView, Text, Box, Heading } from "@/components/Themed";
import RenderHTML from "react-native-render-html";
import { RootStackScreenProps } from "~/types";
import React from "react";
import Layout from "@/constants/Layout";
import Breakpoints from "@/constants/Breakpoints";
import symbolInfo from '@/constants/symbol.json';
import { Container } from "@/components/Themed/Layout";


export default function Home({ navigation }: RootStackScreenProps<"Kline">) {
  return (
    <ScrollView style={styles.container}>
      <Box height={500}>
        <WebView
          style={{
            borderWidth: 0,
          }}
          contentWidth={Layout.window.width - Breakpoints.LayoutPaddingX * 2}
          source={{
            // html: '<iframe  width="400" height="200" src="https://protected-domain.com/user/cart?embedded"/>',
            // uri: './components/kline.html',
            uri: 'https://s.tradingview.com/widgetembed/?theme=dark&symbol=BNBUSDT',
          }}
        />
      </Box>
      <Container marginBottom={3} >
        <Heading>Acerca de Polygon (MATIC)</Heading>
        <Box marginTop={2}>
          {
            symbolInfo.BTC.intro.map((item, index) => {
              return <Text marginTop={2} key={index}>{item}</Text>
            })
          }
        </Box>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// 促销活动
// 引入生态板块
// 社交已经上线
// 商城和一元夺宝已完成 在对接
// 钱包正在开发
// 所有功能完成后会对所有UI进行换肤

// 你们有没有IT?
// 在接下来很长的一段时间后 拿IT