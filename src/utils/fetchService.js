import { getBaseUrl } from "./urls";
import { parseCandleStickData } from "./candleStickService";

export const fetchCandleStickData = async (
  symbol = "BTCBUSD",
  interval = "1m",
  useFuturesTestnet,
  useSpotTestnet,
) => {
  const url = `${getBaseUrl(useFuturesTestnet, useSpotTestnet)}symbol=${symbol}&interval=${interval}`;
  const result = await fetch(url);
  const data = await result.json();
  return parseCandleStickData(data);
};
