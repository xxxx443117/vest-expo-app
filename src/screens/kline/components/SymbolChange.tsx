import React from "react";
import { Avatar, Row, Text, Image, Column } from "native-base";
import { Box, Button, Heading } from "@/components/Themed";
import { Container } from "@/components/Themed/Layout";

const follow = require('@/assets/images/home/follow.png');
const comment = require('@/assets/images/home/comment.png');
const like = require('@/assets/images/home/like.png');
const share = require('@/assets/images/home/share.png');

interface PostInfo {
  avatar: string;
  nickname: string;
  time: number;
  followed: boolean;
  title: string;
  content: string;
  comment: number;
  liked: number;
}

interface SymbolChange {
  info: PostInfo
}


const SymbolChange: React.FC<SymbolChange> = ({ info }) => {

  return (
    <Box bgColor='backgroundCard' paddingY={2} width="100%">
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Row >
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
              }}
              source={{ uri: follow }}
            />
            <Column marginLeft={2} justifyContent="center">
              <Row>
                <Heading>{info.nickname}</Heading>
                <Text>/USDT</Text>
              </Row>
              <Text>成交额 12.21</Text>
            </Column>
          </Row>
          <Row>
            <Column marginRight={2} justifyContent="center">
              <Heading>{info.nickname}</Heading>
              <Text>$ 312.21</Text>
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
