import { Center, Image, Pressable, Modal, IconButton, CloseIcon  } from 'native-base';
import { Box, Text } from "@/components/Themed"
import { StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const dollar = require('@/assets/images/dollar.png')
const profit = require('@/assets/images/profit.png')

const Fab = () => {

    const { navigate } = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);

    return <Box style={styles.cBox} >
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
            <Modal.Content background='transparent' borderWidth={0}>
                <Image source={profit}  width={300} height={375} />
                <Center>
                    <Pressable style={styles.downloadBox}>
                        <Center style={styles.downloadBtn}>
                            <Text color='#fff' fontSize={14} bold>下载赚钱</Text>
                        </Center>
                    </Pressable>
                </Center>
            </Modal.Content>
            <Center marginTop={4} style={styles.closeBtn} borderRadius="full">
                <Pressable>
                    <CloseIcon color='#fff' />
                </Pressable>
            </Center>
        </Modal>
        <Pressable onPress={() => {
            // navigate('Mine')
            setModalVisible(true)
        }}>
            <Center style={styles.box} borderRadius='full' >
                {/* <Text>1233333</Text> */}
                <Image source={dollar}  width='80%' height='80%' />
                <Box style={styles.btn}>
                    <Text fontSize='8px'>点击领取</Text>
                </Box>
            </Center>
        </Pressable>
    </Box>
}

const styles = StyleSheet.create({
    cBox: {
        position: 'absolute',
        top: 100,
        zIndex: 999,
        right: 20,
    },
    box: {
        
        width: 48,
        height: 48,
        overflow: 'hidden',
        // backgroundColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    btn: {
        position: 'absolute',
        bottom: '5px',
        backgroundColor: 'red',
    },
    closeBtn: {
        borderWidth:1,
        borderColor: '#fff',
        width: 32,
        height: 32,
    },
    downloadBox: {
        position: 'absolute',
        bottom: 22,
        width: '61.8%',
        height: 46,
    },
    downloadBtn: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fc5531',
        borderRadius: 20,
    },

})

export default Fab;
