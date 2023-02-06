import { StyleSheet } from "react-native";

import { Button, Text, View } from "@/components/Themed";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Logo from "@/components/Logo";
import Breakpoints from "@/constants/Breakpoints";


export default function Header() {
  const { navigate } = useNavigation();


  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: "center",
    height: 77,
    paddingHorizontal: Breakpoints.LayoutPaddingX,
    // backgroundColor: '#f00'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
