import { CandleStickAdaptorResult } from "./types";

export const candleStickAdaptor = (data: any): CandleStickAdaptorResult => {
  const [
    openTime,
    open,
    high,
    low,
    close,
    volume
  ] = data;
  return {
    time: openTime / 1000,
    open: parseFloat(open),
    high: parseFloat(high),
    low: parseFloat(low),
    close: parseFloat(close),
    value: parseFloat(volume),
    color: open < close ? "#005a40" : "#82112b",
  };
};

export const candleSocketAdaptor = (data: any) => {
  const {
    k: { T, o, c, h, l, v, V },
  } = data;
  return {
    open: parseFloat(o),
    high: parseFloat(h),
    low: parseFloat(l),
    close: parseFloat(c),
    time: T / 1000,
    value: (parseFloat(v) + parseFloat(V)) / 2,
    color: o < c ? "#005a40" : "#82112b",
  };
};
