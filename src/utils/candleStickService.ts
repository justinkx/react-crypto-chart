import { candleStickAdaptor } from "./adaptor";
import { CandleStickAdaptorResult } from "./types";

export const parseCandleStickData = (candleArray = []) => {
  const transformedData = candleArray.reduce((accu: CandleStickAdaptorResult[], curr) => {
    const candle = candleStickAdaptor(curr);
    accu.push(candle);
    return accu;
  }, []);
  return transformedData;
};
