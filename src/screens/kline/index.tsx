import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import { View, ScrollView } from "@/components/Themed";
import RenderHTML from "react-native-render-html";
import { RootStackScreenProps } from "~/types";
import React from "react";
import Layout from "@/constants/Layout";
import Breakpoints from "@/constants/Breakpoints";

export default function Home({ navigation }: RootStackScreenProps<"Kline">) {
  return (
    <View style={styles.container}>
      <RenderHTML
        contentWidth={Layout.window.width - Breakpoints.LayoutPaddingX * 2}
        source={{
          uri: '/kline.html',
          // uri: 'https://s.tradingview.com/widgetembed/?theme=dark&symbol=BNBUSDT',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
