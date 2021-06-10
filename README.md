# React Crypto Chart

[![Latest Github release](https://img.shields.io/github/release/justinkx/react-crypto-chart.svg)](https://github.com/justinkx/react-crypto-chart/releases/latest)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/justinkx/react-crypto-chart/blob/master/LICENSEs)
[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)[![Github All Releases](https://img.shields.io/github/downloads/justinkx/react-crypto-chart/total.svg?style=flat)]()[![Issues](https://img.shields.io/github/issues-raw/justinkx/react-crypto-chart.svg?maxAge=25000)](https://github.com/justinkx/react-crypto-chart/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/justinkx/react-crypto-chart.svg?style=flat)]()
[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()[![GitHub last commit](https://img.shields.io/github/last-commit/justinkx/react-crypto-chart.svg?style=flat)]()

#### crypto chart widget for react using binance api

## How To Install

```npm
npm i react-crypto-chart

```

#### yarn

```npm
yarn add react-crypto-chart
```

## Usage

```javascript
import TradeViewChart from "react-crypto-chart";

<TradeViewChart pair="BTCBUSD" />;
```

## Properties

| Prop              | Required | Type   | Default Value                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pair              | No       | String | BTCBUSD Please refer binance api for more pairs [binance rest api](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)                                                                                                                                                                                                                                                                               |
| interval          | No       | String | 1m                                                                                                                                                                                                                                                                                                                                                                                                                         |
| candleStickConfig | No       | Object | {upColor :"#00c176", downColor : "#cf304a" , borderDownColor : "#cf304a" , borderUpColor : "#00c176" , wickDownColor : "#838ca1" , wickUpColor : "#838ca1" , }                                                                                                                                                                                                                                                             |
| histogramConfig   | No       | Object | { base : 0 , lineWidth : 2 , priceFormat : { type : "volume" , }, overlay : true , scaleMargins : { top : 0.8 , bottom : 0 , }, }                                                                                                                                                                                                                                                                                          |
| chartLayout       | No       | Object | { layout : { backgroundColor : "#ededed" , textColor : "#253248" , }, grid : { vertLines : { color : "#838fa3" , style : LineStyle . SparseDotted , }, horzLines : { color : "#838fa3" , style : LineStyle . SparseDotted , }, }, crosshair : { mode : CrosshairMode . Normal , }, priceScale : { borderColor : "#485c7b" , }, timeScale : { borderColor : "#485c7b" , timeVisible : true , secondsVisible : false , }, }; |

## Authors

- **Justin K Xavier** - _Initial work_ - [LinkedIn](https://www.linkedin.com/in/justin-k-xavier-59b82710a/)

See also the list of [contributors](https://github.com/justinkx/RNChallenge_1/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

<p align="center">😊Pull requests accepted with ❤️</p>
