import {
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Text, View, ScrollView, Button } from "@/components/Themed";
import { Box, Center, Row, Image, Skeleton, Pressable } from "native-base";
import Carousel from "react-native-reanimated-carousel";
import React from "react";
import { ViewProps } from "@/components/Themed/types";
import { Container } from "@/components/Themed/Layout";
import Layout from "@/constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { BannerType } from "~/types";
import Breakpoints from "@/constants/Breakpoints";

interface BannerImageProps {
  style?: StyleProp<ViewStyle>;
  item: any;
  index: number;
}

const BannerImage: React.FC<BannerImageProps> = ({ style, item, index }) => {
  const { navigate } = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={styles.image}
        onPress={() => {
          navigate("BannerDetail", {
            index,
            title: item.title,
            type: BannerType.BANNER,
          });
        }}
      >
        <Image
          style={styles.image}
          alt={item.title}
          source={{ uri: item.resLink }}
        />
      </Pressable>
    </View>
  );
};

const defaultProps = {
  width: Layout.window.width,
  autoPlay: true,
  pagingEnabled: true,
  autoPlayInterval: 3000,
  height: 150,
};

const Banner = () => {
    return (
      <Carousel
        {...defaultProps}
        data={[1, 2, 3]}
        renderItem={({ item }) => <Skeleton style={styles.image} />}
      />
    );
  // useFetchBannderData();
  // const { loaded, data } = useStore((p) => p.common.banner);

  // if (!loaded || !data?.total) {
  //   return (
  //     <Carousel
  //       {...defaultProps}
  //       data={[1, 2, 3]}
  //       renderItem={({ item }) => <Skeleton style={styles.image} />}
  //     />
  //   );
  // }
  // return (
  //   <Carousel
  //     {...defaultProps}
  //     data={data?.list || []}
  //     renderItem={({ item, index }) => (
  //       <BannerImage item={item} index={index} />
  //     )}
  //   />
  // );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  btn: {
    position: "absolute",
    top: 0,
    bottom: 0,
    borderRadius: 8,
  },
  image: {
    position: "absolute",
    top: 0,
    left: Breakpoints.LayoutPaddingX / 2,
    bottom: 0,
    right: Breakpoints.LayoutPaddingX / 2,
    borderRadius: 8,
  },
});
