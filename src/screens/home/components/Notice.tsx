import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, Button } from '@/components/Themed';
import { Box, Center, Image, Row } from 'native-base';
import Carousel from 'react-native-reanimated-carousel';
import React from 'react';
import { Search } from '@/components/Search';
import Icon from '@/components/icons/Icon'
import GradientCard from '@/components/Themed/Card/GradientCard';
import { useNavigation } from '@react-navigation/native';
import { BannerType } from '~/types';

const noticeImg = require('@/assets/images/notice.png');

const NoticeItem: React.FC<{ item: any, index: number, navigate: any }> = ({ item, index, navigate }) => {
  return (
    <Box height='100%' width='100%' justifyContent='center'>
      <Button onPress={() => {
        navigate('NoticeDetail', { index, title: item.title });
      }} width='100%' title='' variant='custom' height='100%'>
        <Text ellipsizeMode='tail' fontSize={12}>{ item.title }</Text>
      </Button>
    </Box>
  )
}

const defaultData: any[] = [
  {
    createdAt: 1657426989568,
    desc: "",
    link: "",
    subTitle: "",
    title: "暂无公告",
    updatedAt: 1657426989568,
  },
  {
    createdAt: 1657426989568,
    desc: "",
    link: "",
    subTitle: "",
    title: "公告加载中",
    updatedAt: 1657426989568,
  },
]
export default function Notice() {

  const { navigate } = useNavigation();


  const [activeIndex, setActiveIndex] = React.useState(0);
  const loaded = false;
  const data = {
    list: []
  }

  const list = React.useMemo(() => {

    if (data?.list) {
      return data?.list;
    }
    if (!loaded) {
      return [defaultData[1]];
    }
    return [defaultData[0]]
  }, [data, loaded])

  return (
    <Box pt={4} position='relative' height={75}>
      <Box zIndex={2} position='absolute' bottom={-1} left={2}>
        <Image width={83} height={78} alt='notice' source={noticeImg} />
      </Box>
      <GradientCard pt={3} paddingLeft={104} borderRadius='md' borderBottomRadius='0' variant={1}>
        <Carousel
          width={212}
          vertical
          autoPlay={true}
          height={28}
          data={list}
          autoPlayInterval={3000}
          onScrollEnd={(index) => {
            setActiveIndex(index)
          }}
          renderItem={({ item, index }) => <NoticeItem navigate={navigate} item={item} index={index} />}
        />
      </GradientCard>
      <GradientCard  pb={2} justifyContent='center' height={28} paddingRight={2} paddingLeft={104} borderRadius='md' borderTopRadius='0' variant={1}>
        <Button variant='custom' title='' onPress={() => {
          navigate('NoticeList', { index: activeIndex, title: list[activeIndex]?.title, type: BannerType.NOTICE });
        }}>
          <Row width='100%' justifyContent='space-between'>
            <Text fontSize={11} color='subText'>{21}</Text>
            <Icon size={8} name='chevron-right' />
          </Row>
        </Button>
      </GradientCard>
    </Box>
  );
}

