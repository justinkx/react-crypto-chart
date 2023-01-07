export default URL = {
    main: {
        base: "https://api.binance.com/api/v3/klines?",
        ws: "wss://stream.binance.com:9443/ws"
    },
    future: {
        base: "https://testnet.binancefuture.com/v1/klines?",
        ws: "wss://stream.binancefuture.com/ws"
    },
    spot: {
        base: "https://testnet.binance.vision/api/v3/klines?",
        ws: "wss://testnet.binance.vision/ws"
    }
};

export function getBaseUrl(useFuturesTestnet: boolean, useSpotTestnet: boolean): string {
    if (useFuturesTestnet && !useSpotTestnet) return URL.future.base;
    else if (!useFuturesTestnet && useSpotTestnet) return URL.spot.base;
    return URL.main.base;
}

export function getWebsocketUrl(useFuturesTestnet: boolean, useSpotTestnet: boolean): string {
    if (useFuturesTestnet && !useSpotTestnet) return URL.future.ws;
    else if (!useFuturesTestnet && useSpotTestnet) return URL.spot.ws;
    return URL.main.ws;
}