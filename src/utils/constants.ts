import { CrosshairMode, LineStyle } from "lightweight-charts";

export const BASE_URL = "https://api.binance.com/api/v3/klines?";
export const WS_URL = "wss://stream.binance.com:9443/ws";

export const condleStickDefaultConfig = {
  upColor: "#00c176",
  downColor: "#cf304a",
  borderDownColor: "#cf304a",
  borderUpColor: "#00c176",
  wickDownColor: "#838ca1",
  wickUpColor: "#838ca1",
};

export const histogramDefaultConfig = {
  base: 0,
  lineWidth: 2,
  priceFormat: {
    type: "volume",
  },
  overlay: true,
  scaleMargins: {
    top: 0.8,
    bottom: 0,
  },
};

export const defaultChartLayout = {
  layout: {
    backgroundColor: "#ededed",
    textColor: "#253248",
  },
  grid: {
    vertLines: {
      color: "#838fa3",
      style: LineStyle.SparseDotted,
    },
    horzLines: {
      color: "#838fa3",
      style: LineStyle.SparseDotted,
    },
  },
  crosshair: {
    mode: CrosshairMode.Normal,
  },
  priceScale: {
    borderColor: "#485c7b",
  },
  timeScale: {
    borderColor: "#485c7b",
    timeVisible: true,
    secondsVisible: false,
  },
};
