import {
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Text, View, ScrollView, Button, Box } from "@/components/Themed";
import { Center, Row, Image, Skeleton, Pressable } from "native-base";
import Carousel from "react-native-reanimated-carousel";
import React from "react";
import Layout from "@/constants/Layout";
import { useNavigation } from "@react-navigation/native";
import Breakpoints from "@/constants/Breakpoints";

interface BannerImageProps {
  style?: StyleProp<ViewStyle>;
  item: any;
  index: number;
}

const banner1 = require('@/assets/images/home/banner1.png');
const banner2 = require('@/assets/images/home/banner2.png');

const BannerImage: React.FC<BannerImageProps> = ({ style, item, index }) => {

  return (
    <Center bgColor='backgroundCard' style={[styles.container, style]}>
        <Pressable
          style={styles.image}
        >
          <Image
            style={styles.image}
            alt={item.title}
            source={item.resLink}
          />
        </Pressable>
    </Center>
  );
};

const defaultProps = {
  width: Layout.window.width,
  autoPlay: true,
  pagingEnabled: true,
  autoPlayInterval: 3000,
  height: Layout.window.width / 1044 * 578,
};

const list: any[] = [{
  title: 'banner1',
  resLink: banner1,
}, {
  title: 'banner2',
  resLink: banner2,
}];

const Banner = () => {
  return (
    <Carousel
      {...defaultProps}
      data={list || []}
      renderItem={({ item, index }: any) => (
        <BannerImage item={item} index={index} />
      )}
    />
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  image: {
    borderRadius: 2,
    height: Layout.window.width / 1044 * 578 - Breakpoints.LayoutPaddingX * 2,
    width: Layout.window.width - Breakpoints.LayoutPaddingX * 2
  },
});
