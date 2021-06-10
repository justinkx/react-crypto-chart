import { BASE_URL } from "./constants";
import { parseCandleStickData } from "./candleStickService";

export const fetchCandleStickData = async (
  symbol = "BTCBUSD",
  interval = "1m"
) => {
  const url = `${BASE_URL}symbol=${symbol}&interval=${interval}`;
  const result = await fetch(url);
  const data = await result.json();
  return parseCandleStickData(data);
};
