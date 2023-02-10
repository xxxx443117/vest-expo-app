import React from "react";
import { Avatar, Row, Text, Image, Column } from "native-base";
import { Box, Button, Heading } from "@/components/Themed";
import { Container } from "@/components/Themed/Layout";
import { useNavigation } from "@react-navigation/native";

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

interface PostCard {
  info: PostInfo
}


const PostCard: React.FC<PostCard> = ({ info }) => {
  const { navigate } = useNavigation();

  return (
    <Box bgColor='backgroundCard' paddingY={2} mb={2} width="100%">
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Row >
            <Avatar bg="green.500" source={{
              uri: info.avatar
            }}>
              {info.nickname}
            </Avatar>
            <Column marginLeft={2} justifyContent="center">
              <Heading>{info.nickname}</Heading>
              <Text>{info.time}</Text>
            </Column>
          </Row>
          <Button title="关注"  variant="subtle" leftElement={
            <Image
              alt="icon"
                style={{
                  width: 8,
                  height: 8,
                  marginRight: 2,
                }}
                source={follow}
              />
          } />
        </Row>
        <Box paddingY={3}>
          <Heading marginBottom={1}>{info.title}</Heading>
          <Text>{info.content}</Text>
        </Box>
        <Row>
          <Row flex={1} alignItems='center'>
            <Image
              alt="icon"
              style={{
                width: 15,
                height: 15,
                marginRight: 4
              }}
              source={comment}
            />
            <Text>{info.comment}</Text>
          </Row>
          <Row flex={1} alignItems='center'>
            <Image
              alt="icon"
              style={{
                width: 15,
                height: 15,
                marginRight: 4
              }}
              source={like}
            />
            <Text>{info.liked}</Text>
          </Row>
          <Row flex={1} alignItems='center'>
            <Image
              alt="icon"
              style={{
                width: 15,
                height: 15,
                marginRight: 4
              }}
              source={share}
            />
            <Text>分享</Text>
          </Row>
        </Row>
      </Container>
    </Box>
  );
};
export default PostCard;

