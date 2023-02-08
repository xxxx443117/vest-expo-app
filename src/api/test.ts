
  
  import {
    WebsocketClient,
    DefaultLogger,
    isWsFormatted24hrTicker,
    isWsFormattedKline,
    WsRawMessage
  } from 'binance';

export  const start = async () => {

    fetch('https://api.exchangerate-api.com/v4/latest/USD').then(res => {
        return res.json()
    }).then(res => {
        console.log(res);
    })
    const key = 'APIKEY';
    const secret = 'APISECRET';
  
    const market = 'BTCUSDT';
    const coinMSymbol = 'AVAXUSD_PERP';

    const markets = [
        'BTC',
        'ETH',
        'BNB',
        'XRP',
        'DOGE',
        'SOL',
        'MATIC',
        'SHIB',
        'LTC',
        'ADA',
        'DOT',
        'AVAX',
        'UNI',
    ]

    const subscribes: any[] = [];
  
    const logger = {
      ...DefaultLogger,
      // silly: () => {},
    };
  
    const wsClient = new WebsocketClient({
      // api_key: key,
      // api_secret: secret,
      beautify: true,
    }, logger);
  
    wsClient.on('message', (data) => {
      console.log('raw message received ', JSON.stringify(data, null, 2));
    });
  
    wsClient.on('formattedMessage', (data) => {
      // manually handle events and narrow down to desired types
      if (!Array.isArray(data) && data.eventType === 'kline') {
        console.log('kline received ', data.kline);
      }
  
      // or use a supplied type guard (if available - not all type guards have been written yet)
      if (isWsFormattedKline(data)) {
        console.log('kline received ', data.kline);
        return;
      }
  
      if (isWsFormatted24hrTicker(data)) {
        console.log('24hrTicker received ', data);
        return;
      }
  
      console.log('log formattedMessage: ', data);
    });
  
    wsClient.on('open', (data) => {
      console.log('connection opened open:', data.wsKey, data.ws.target.url);
    });

  
    // response to command sent via WS stream (e.g LIST_SUBSCRIPTIONS)
    wsClient.on('reply', (data) => {
      console.log('log reply: ', JSON.stringify(data, null, 2));
    });
    wsClient.on('reconnecting', (data) => {
      console.log('ws automatically reconnecting.... ', data?.wsKey );
    });
    wsClient.on('reconnected', (data) => {
      console.log('ws has reconnected ', data?.wsKey );
    });
  
    // wsClient.subscribeCoinIndexPrice(coinMSymbol);
  
    // wsClient.subscribeSpotKline(market, '1m');
    markets.forEach(item => {
        subscribes.push(wsClient.subscribeMarkPrice(`${item}USDT`, 'usdm'));
    })
    
    // setTimeout(() => {
    //     console.log('subscribes')
    //     subscribes.forEach(item => {
    //         wsClient.closeWs(item);
    //     })
        
    // }, 5000);
    // wsClient.subscribeMarkPrice(market, 'usdm');
    // wsClient.subscribeMarkPrice(coinMSymbol, 'coinm');
    // wsClient.subscribeAllMarketMarkPrice('usdm');
    // wsClient.subscribeAllMarketMarkPrice('coinm');
    // wsClient.subscribeKlines(market, '1m', 'usdm');
    // wsClient.subscribeContinuousContractKlines(market, 'perpetual', '1m', 'usdm');
    // wsClient.subscribeIndexKlines(coinMSymbol, '1m');
    // wsClient.subscribeMarkPriceKlines(coinMSymbol, '1m');
    // wsClient.subscribeSymbolMini24hrTicker(market, 'usdm');
    // wsClient.subscribeSymbolMini24hrTicker(coinMSymbol, 'coinm');
    // wsClient.subscribeSymbolMini24hrTicker(market, 'spot');
    // wsClient.subscribeSymbol24hrTicker(market, 'usdm');
    // wsClient.subscribeSymbol24hrTicker(market, 'coinm');
    // wsClient.subscribeSymbol24hrTicker(coinMSymbol, 'spot');
    // wsClient.subscribeAllMini24hrTickers('usdm');
    // wsClient.subscribeAllMini24hrTickers('coinm');
    // wsClient.subscribeAllMini24hrTickers('spot');
    // wsClient.subscribeAll24hrTickers('usdm');
    // wsClient.subscribeAll24hrTickers('coinm');
    // wsClient.subscribeAll24hrTickers('spot');
    // wsClient.subscribeAllLiquidationOrders('usdm');
    // wsClient.subscribeAllLiquidationOrders('coinm');
    // wsClient.subscribeSpotSymbol24hrTicker(market);
    // wsClient.subscribeAggregateTrades(market, 'usdm');
    // wsClient.subscribeSpotPartialBookDepth('ETHBTC', 5, 1000);
  
  }