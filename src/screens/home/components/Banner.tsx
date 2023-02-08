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
  const { navigate } = useNavigation();

  return (
    <Box bgColor='backgroundCard' style={[styles.container, style]}>
        <Pressable
          style={styles.image}
        >
          <Image
            style={styles.image}
            alt={item.title}
            source={{ uri: item.resLink }}
          />
        </Pressable>
    </Box>
  );
};

const defaultProps = {
  width: Layout.window.width,
  autoPlay: true,
  pagingEnabled: true,
  autoPlayInterval: 3000,
  height: 150,
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
      renderItem={({ item, index }) => (
        <BannerImage item={item} index={index} />
      )}
    />
  );
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
