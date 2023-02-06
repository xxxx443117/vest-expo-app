import { StyleSheet, Image } from "react-native";
import { Text, View, ScrollView, Button } from "@/components/Themed";
import { Box, Center, Row, Modal } from "native-base";
import { RootTabScreenProps, SearchType } from "~/types";
import React, { useState } from "react";
import { Search } from "@/components/Search";
import Icon from "@/components/icons/Icon";
// import Banner from "./components/Banner";
// import Notice from "./components/Notice";
import HotList from "./components/HotList";
import RushPurchase from "./components/RushPurchase";
import { Container, EmptyBottom } from "@/components/Themed/Layout";
import Breakpoints from "@/constants/Breakpoints";
import { useFocusEffect } from "@react-navigation/native";
export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const purchaseList = [
    {
      authorAvatar: "",
      authorNickname: "测试",
      createdAt: 1660746811986,
      saleTime: 1662480000000,
      endTime: 1662220800000,
      nftAttrId: 52,
      nftCollectionId: 16,
      nftType: 1,
      resLink: "PUB-0-c7006a58-9fc3-4a8a-b961-5da8c379f4db",
      title: "创世·龙神【金龙】",
      type: 1,
    },
    {
      authorAvatar: "",
      authorNickname: "测试",
      createdAt: 1660837099480,
      saleTime: 1662566400000,
      endTime: 1662220800000,
      desc: "",
      nftAttrId: 49,
      nftCollectionId: 18,
      nftType: 1,
      resLink: "PUB-0-56039641-c43b-4354-b584-2f8ab52cc029",
      title: "创世·龙神【夔龙】",
      type: 2,
    },
    {
      authorAvatar: "",
      authorNickname: "测试",
      createdAt: 1660837099480,
      saleTime: 1662480000000,
      endTime: 1662220800000,
      desc: "",
      nftAttrId: 50,
      nftCollectionId: 18,
      nftType: 1,
      resLink: "PUB-0-56039641-c43b-4354-b584-2f8ab52cc029",
      title: "创世·龙神【夔龙】",
      type: 3,
    },
    {
      authorAvatar: "",
      authorNickname: "测试",
      createdAt: 1660837099480,
      saleTime: 1662480000000,
      endTime: 1662220800000,
      desc: "",
      nftAttrId: 51,
      nftCollectionId: 18,
      nftType: 1,
      resLink: "PUB-0-56039641-c43b-4354-b584-2f8ab52cc029",
      title: "创世·龙神【夔龙】",
      type: 3,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>

        <Box>
          {/* <Banner /> */}
        </Box>
        <Container mt="5">
          {/* <Notice /> */}
          <RushPurchase list={purchaseList} />
          <HotList list={purchaseList} />
        </Container>
        <EmptyBottom />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: Breakpoints.LayoutBottomHeight,
  },
  content: {
    paddingLeft: 26,
    paddingRight: 26,
  },
});
