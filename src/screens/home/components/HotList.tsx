import { Text, Heading, Button } from "@/components/Themed";
import { Box, Center, Row } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface HotListProps {
  list: any[];
}
const HotList: React.FC<HotListProps> = ({ list }) => {
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
    <Box mt={10} width="100%">
      <Row justifyContent="space-between" alignItems="center">
        <Heading>热门数藏</Heading>
        <Button
          onPress={() => {
            // navigate("Root", { screen: "Market" });
            navigate("Root", { screen: "Market" });
          }}
          title=""
          variant="custom"
        >
          <Text color="subText">更多</Text>
        </Button>
      </Row>
      <Box mt={22} width="100%">
        {Boolean(list?.length) ? (
          list.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <Row
                  key={item.nftAttrId}
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  <Box mb={3}>
          <Text color="subText">更多</Text>
                    
                  </Box>
                  {Boolean(list[index + 1]) && (
                    <Box mb={3}>
          <Text color="subText">更多</Text>
                      
                    </Box>
                  )}
                </Row>
              );
            }
            return null;
          })
        ) : (
          <Row
            width="100%"
            mt={22}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {/* <Box width='50%' mb={3}>
                  <NftCard />
                </Box> */}
            {/* <Box width='50%' mb={3}>
                  <NftCard />
                </Box>
                <Box width='50%' mb={3}>
                  <NftCard />
                </Box>
                <Box width='50%' mb={3}>
                  <NftCard />
                </Box> */}
            {/* <Box width='50%' />
                <Box width='50%' /> */}
            {/* <Box mb={2}>
                  <NftCard />
                </Box>
                <Box mb={2}>
                  <NftCard />
                </Box> */}
          </Row>
        )}
      </Box>
    </Box>
  );
};

export default HotList;
