import { candleStickAdaptor } from "./adaptor";

export const parseCandleStickData = (candleArray = []) => {
  const transformedData = candleArray.reduce((accu, curr) => {
    const candle = candleStickAdaptor(curr);
    accu.push(candle);
    return accu;
  }, []);
  return transformedData;
};
