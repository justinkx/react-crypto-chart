const url: { [key: string]: { [key: string]: string } } = {
  main: {
    base: "https://api.binance.com/api/v3/klines?",
    ws: "wss://stream.binance.com:9443/ws"
  },
  future: {
    base: "https://testnet.binancefuture.com/fapi/v1/klines?",
    ws: "wss://stream.binancefuture.com/ws"
  },
  spot: {
    base: "https://testnet.binance.vision/api/v3/klines?",
    ws: "wss://testnet.binance.vision/ws"
  }
};

export function getBaseUrl(useFuturesTestnet: boolean, useSpotTestnet: boolean): string {
  if (useFuturesTestnet && !useSpotTestnet) {
    return url.future.base;
  }
  if (!useFuturesTestnet && useSpotTestnet) {
    return url.spot.base;
  }
  return url.main.base;
}

export function getWebsocketUrl(useFuturesTestnet: boolean, useSpotTestnet: boolean): string {
  if (useFuturesTestnet && !useSpotTestnet) {
    return url.future.ws;
  }
  if (!useFuturesTestnet && useSpotTestnet) {
    return url.spot.ws;
  }
  return url.main.ws;
}