import { StyleSheet } from "react-native";
import { View, ScrollView, Button } from "@/components/Themed";
import { Box, Spinner } from "native-base";
import { RefreshControl } from "react-native";
import { RootTabScreenProps } from "~/types";
import React from "react";
// import Banner from "./components/Banner";
import Header from '@/components/Header';
import PostCard from "./components/PostCard";
import { getContentList } from "@/api/request";
import Empty from "@/components/Empty";
import { useNavigation } from "@react-navigation/native";
import useDebounce from "@/hooks/useDebounce";

const pageSize = 20;

export default function Home({ navigation }: RootTabScreenProps<"Home">) {

  const [page, setPage] = React.useState(1);
  const [contentList, setContentList] = React.useState<any[]>([]);
  const [refreshing, setRefreshing] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [loadEnd, setLoadEnd] = React.useState(false)

  const [search, setSearch] = React.useState("");
  const debounceSearch = useDebounce(search, 500);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    setQuery(debounceSearch);
    setPage(1);
    setContentList([]);
  }, [debounceSearch])

  const fetchHandle = React.useCallback(async () => {
    setLoading(true);
    const res = await getContentList({
      page,
      q: query,
      pageSize,
    });
    if (page === 1) {
      setContentList(res);
    } else {
      setContentList(p => {
        return p.concat(res);
      })
    }

    if (res.length < pageSize) {
      setLoadEnd(true);
    }
    setLoading(false);
    setRefreshing(false);
  }, [query, page])

  React.useEffect(() => {
    fetchHandle()
  }, [fetchHandle])

  const onContentViewScroll = React.useCallback(
    (e: any) => {
      if (loadEnd) return;
      if (refreshing) return;
      if (loading) return;
      var offsetY = e.nativeEvent.contentOffset.y; // 已经滚动的距离
      var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; // 可滚动的可见区域高度
      var contentSizeHeight = Math.round(e.nativeEvent.contentSize.height); // 可滚动的总高度
      if (Math.round(offsetY + oriageScrollHeight) >= contentSizeHeight - 50) {
        setPage(p => p+1)
      }
    },
    [loadEnd, loading, refreshing, setPage]
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setPage(1);
  }, [])

  return (
    <View style={styles.container}>
      <Header search={{
        placeholder: 'Buscar publicaciones',
        value: search,
        onChangeText: (_text) => {
          setSearch(_text);
        }
      }} />
      <ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={onContentViewScroll}
      >
        <Box>
          {/* <Banner /> */}
        </Box>
        <Box mt="2">
          {
            contentList.map(item => {
              return <PostCard key={item.id} info={item} />
            })
          }
          {
            loading && <Spinner />
          }
          {
           !loading && contentList.length === 0 &&  <Empty />
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
