import React from "react";
import { Box, ScrollView, Row, View, Text, Button } from "native-base";
import { Heading } from "@/components/Themed";
import { StyleSheet, Image } from "react-native";
// import { NftCard } from "@/components/NftCard";
import { useNavigation } from "@react-navigation/native";

interface RushPurchase {
  list: any;
}

const RushPurchase: React.FC<RushPurchase> = ({ list }) => {
  console.log(list);
  const { navigate } = useNavigation();
  const hotNavHandle = React.useCallback(
    (type: number, tagId: number) => {
      if (type === 1) {
        navigate("Root", { screen: "Market", params: { tagId } });
        return;
      }
      navigate("Root", { screen: "BlindBox", params: { tagId } });
    },
    [navigate]
  );
  return (
    // <div>123</div>
    // <View>
    <Box mt={10} width="100%">
      <Row justifyContent="space-between" alignItems="center">
        <Heading style={styles.header}>抢购区</Heading>
        {/* <Button
          onPress={() => {
            // navigate("Root", { screen: "Market" });
            navigate("Root", { screen: "Market" });
          }}
          title=""
          variant="custom"
        >
          <Text color="subText">更多</Text>
        </Button> */}
      </Row>
      <ScrollView
        style={styles.container}
        horizontal={true} // 横向
        showsHorizontalScrollIndicator={false}
        mt={22}
      >
        <Text>12</Text>
      </ScrollView>
    </Box>
    // </View>
  );
};
export default RushPurchase;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingBottom: Breakpoints.LayoutBottomHeight,
    // marginTop: 12,
  },
  oneRow: {
    marginLeft: 10,
  },
  header: {
    fontSize: 17,
    fontWeight: "700",
  },
});
