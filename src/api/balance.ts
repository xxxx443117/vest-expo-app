
import { markets } from '@/constants/Symbol';
import { MainClient, WebsocketClient, DefaultLogger } from 'binance';
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

export const startMarkPrice = () => {
    markets.forEach(item => {
        marketSubscribes.push(
            wsClient.subscribeMarkPrice(`${item}USDT`, 'usdm')
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