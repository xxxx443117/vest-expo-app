
import { markets } from '@/constants/Symbol';
import { MainClient, WebsocketClient, DefaultLogger } from '../lib/balance/lib/index';
import WebSocket from 'isomorphic-ws';

const logger = {
    ...DefaultLogger,
// silly: () => {},
};

export const wsClient = new WebsocketClient({
    // api_key: key,
    // api_secret: secret,
    beautify: true,
}, logger);

const marketSubscribes: WebSocket[] = [];
const marketTrikerSubscribes: WebSocket[] = [];

export const startMarkPrice = () => {
    markets.forEach(item => {
        // marketSubscribes.push(
        //     wsClient.subscribeMarkPrice(`${item}USDT`, 'usdm')
        // )
        marketTrikerSubscribes.push(
            wsClient.subscribeSymbol24hrTicker(`${item}USDT`, 'usdm')
        )
    })
}

export const closeMarkPrice = () => {
    console.log('close ============ =========== close')
    marketSubscribes.forEach(item => {
        wsClient.closeWs(item)
    })
    marketSubscribes.splice(0, marketSubscribes.length)
}

export const closeMarkTriker = () => {
    console.log('close ============ closeMarkTriker close')
    marketTrikerSubscribes.forEach(item => {
        wsClient.closeWs(item)
    })
    marketTrikerSubscribes.splice(0, marketTrikerSubscribes.length)
}