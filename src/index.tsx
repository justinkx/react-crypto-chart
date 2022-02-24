import React, { memo, useEffect, useCallback, useState } from 'react';

import { fetchCandleStickData } from './utils/fetchService';
import TradeView from './TradeView';
import { WS_URL } from './utils/constants';
import { candleSocketAdaptor } from './utils/adaptor';
import {
  condleStickDefaultConfig,
  histogramDefaultConfig,
  defaultChartLayout,
} from './utils/constants';
import { Props, CandleStickSocketData } from './utils/types';

const TradeViewChart: React.FC<Props> = ({
  pair = 'BTCBUSD',
  interval = '1m',
  candleStickConfig = condleStickDefaultConfig,
  histogramConfig = histogramDefaultConfig,
  chartLayout = defaultChartLayout,
  containerStyle,
}) => {
  const [candleStickData, setCandleData] = useState<[] | null>(null);
  const [updatedata, setUpdateData] = useState<CandleStickSocketData | null>(
    null
  );

  const fetchCandleData = useCallback(async () => {
    const candleData = await fetchCandleStickData(pair);
    setCandleData(candleData);
  }, [pair]);

  useEffect(() => {
    fetchCandleData();
  }, [fetchCandleData]);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}/${pair.toLocaleLowerCase()}@kline_${interval}`
    );
    // ws.onopen = () => console.log("open");
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      const parsedMessage = candleSocketAdaptor(message);
      setUpdateData(parsedMessage);
    };
    return () => {
      ws.close();
    };
  }, [pair, interval]);

  if (!candleStickData) {
    return <div className="loader" />;
  }
  return (
    <TradeView
      updatedata={updatedata}
      initialChartData={candleStickData}
      candleStickConfig={candleStickConfig}
      histogramConfig={histogramConfig}
      chartLayout={chartLayout}
      containerStyle={containerStyle}
    />
  );
};

export default memo(TradeViewChart);
