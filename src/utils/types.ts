export interface CandleStickSocketData {
  open: number;
  high: number;
  low: number;
  close: number;
  time: number;
  value: number;
  color: string;
}
export interface TradeViewProps {
  initialChartData: [];
  updatedata: CandleStickSocketData | null;
  candleStickConfig: CandleStickConfig;
  histogramConfig: HistogramConfig;
  chartLayout: {};
}

export interface CandleStickConfig {
  upColor?: string;
  downColor?: string;
  borderDownColor?: string;
  borderUpColor?: string;
  wickDownColor?: string;
  wickUpColor?: string;
}

export interface HistogramConfig {
  base?: number;
  lineWidth?: number;
  priceFormat?: {
    type: string;
  };
  overlay?: boolean;
  scaleMargins?: {
    top?: number;
    bottom?: number;
  };
}
export interface ChartSeries {
  setData: (data: []) => {};
  applyOptions: (data: {}) => {};
  update: (data: CandleStickSocketData) => {};
}
export interface TradeViewChart {
  addCandlestickSeries: (config: CandleStickConfig) => {};
  addHistogramSeries: (config: HistogramConfig) => {};
}
