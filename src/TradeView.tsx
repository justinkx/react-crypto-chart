import React, { memo, useRef, useEffect, useCallback } from 'react';
import { createChart } from 'lightweight-charts';
import { ChartSeries, TradeViewProps, TradeViewChart } from './utils/types';

const TradeView: React.FC<TradeViewProps> = ({
  initialChartData,
  updatedata = null,
  candleStickConfig = {},
  histogramConfig = {},
  chartLayout = {},
  containerStyle = {
    maxWidth: '100%',
    maxHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}) => {
  const resizeObserver = useRef<any>();
  const chartContainerRef = useRef<string | any>();
  const chart = useRef<TradeViewChart | any>();
  const candleSeries = useRef<ChartSeries | any>();
  const volumeSeries = useRef<ChartSeries | any>();

  const setInitialData = useCallback(() => {
    candleSeries.current =
      chart?.current?.addCandlestickSeries(candleStickConfig);
    candleSeries?.current.setData(initialChartData);
    volumeSeries.current = chart.current.addHistogramSeries(histogramConfig);
    volumeSeries?.current?.setData(initialChartData);
    candleSeries.current.applyOptions({
      priceFormat: {
        type: 'price',
        precision: 5,
        minMove: 0.001,
      },
    });
  }, [initialChartData, candleStickConfig, histogramConfig]);

  useEffect(() => {
    if (updatedata) {
      candleSeries?.current?.update(updatedata);
      volumeSeries?.current?.update(updatedata);
    }
  }, [updatedata]);

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      ...chartLayout,
    });
    setInitialData();
  }, [setInitialData, chartLayout]);

  // Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({
        width,
        height,
        priceFormat: {
          type: 'price',
          precision: 5,
          minMove: 0.001,
        },
      });
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);
  return (
    <div
      ref={chartContainerRef}
      className="chartContainer"
      style={containerStyle}
    />
  );
};

export default memo(TradeView);
