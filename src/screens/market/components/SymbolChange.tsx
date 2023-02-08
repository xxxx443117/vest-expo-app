import React from "react";
import { Avatar, Row, Text, Image, Column } from "native-base";
import { Box, Button, Heading } from "@/components/Themed";
import { Container } from "@/components/Themed/Layout";
import SymbolCoin from "@/components/icons/SymbolCoin";

const follow = require('@/assets/images/home/follow.png');
const comment = require('@/assets/images/home/comment.png');
const like = require('@/assets/images/home/like.png');
const share = require('@/assets/images/home/share.png');

export interface SymbolInfo {
  symbol: string,
  price: number,
  brlPrice: number,
  change: number,
  rate: number,
}

interface SymbolChange {
  info: SymbolInfo
}


const SymbolChange: React.FC<SymbolChange> = ({ info }) => {

  return (
    <Box bgColor='backgroundCard' paddingY={2} width="100%">
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Row >
            <SymbolCoin symbol={info.symbol} />
            <Column marginLeft={2} justifyContent="center">
              <Row>
                <Heading>{info.symbol}</Heading>
                <Text>/USDT</Text>
              </Row>
              {/* <Text>成交额 12.21</Text> */}
            </Column>
          </Row>
          <Row>
            <Column marginRight={2} justifyContent="center">
              <Heading>{info.price}</Heading>
              <Text>$ {info.brlPrice}</Text>
            </Column>
            <Button title="关注" style={{

            }}  variant="custom" />
          </Row>
        </Row>
      </Container>
    </Box>
  );
};
export default SymbolChange;


const ChangeBox = ({ change = 1, rate = 0.01 }) => {
  return <Box>
    <Row>
      <Text>{change>0}</Text>
    </Row>
  </Box>
}