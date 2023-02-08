import { StyleSheet } from "react-native";
import { View, ScrollView } from "@/components/Themed";
import { Box } from "native-base";
import { RootTabScreenProps } from "~/types";
import React from "react";
import Banner from "./components/Banner";
import Header from '@/components/Header';
import PostCard from "./components/PostCard";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
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

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.container}>
        <Box>
          <Banner />
        </Box>
        <Box mt="2">
          {
            list.map(item => {
              return <PostCard key={item.id} info={item} />
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
