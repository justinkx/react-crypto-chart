# React Crypto Chart

[![Latest Github release](https://img.shields.io/github/release/justinkx/react-crypto-chart.svg)](https://github.com/justinkx/react-crypto-chart/releases/latest)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/justinkx/react-crypto-chart/blob/master/LICENSEs)
[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)[![Github All Releases](https://img.shields.io/github/downloads/justinkx/react-crypto-chart/total.svg?style=flat)]()[![Issues](https://img.shields.io/github/issues-raw/justinkx/react-crypto-chart.svg?maxAge=25000)](https://github.com/justinkx/react-crypto-chart/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/justinkx/react-crypto-chart.svg?style=flat)]()
[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()[![GitHub last commit](https://img.shields.io/github/last-commit/justinkx/react-crypto-chart.svg?style=flat)]()

#### crypto chart widget for react using binance api

<img width="1434" alt="React Crypto Chart" src="https://user-images.githubusercontent.com/28846043/121532071-a4571e80-ca1c-11eb-9d08-3c8392737161.png">

### Example

- Example App:

```
cd example
npm install
npm start
```

- [Stackblitz example](https://stackblitz.com/edit/react-crypto-chart)

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
import TradeViewChart from 'react-crypto-chart';

<TradeViewChart pair="BTCBUSD" />;
```

## Properties

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Prop</th>
    <th class="tg-0pky">Required</th>
    <th class="tg-0pky">Type</th>
    <th class="tg-0pky">Default Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">pair</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">String</td>
    <td class="tg-0pky">BTCBUSD<br>Please refer binance api for more pairs<br><a href="https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md">binance rest api</a></td>
  </tr>
  <tr>
    <td class="tg-0pky">interval</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">String</td>
    <td class="tg-0pky">1m</td>
  </tr>
  <tr>
    <td class="tg-0pky">candleStickConfig</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object<br><a href="https://github.com/justinkx/react-crypto-chart/blob/readme/TYPES.md#candlestick-config-type" target="_blank" rel="noopener noreferrer">Candlestick Config type</a></td>
    <td class="tg-0pky">
    <pre>
    {
        upColor: "#00c176",
        downColor: "#cf304a",
        borderDownColor: "#cf304a",
        borderUpColor: "#00c176",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
    }
    </pre>
    </td>
  </tr>
  <tr>
    <td class="tg-0pky">histogramConfig</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object<br><a href="https://github.com/justinkx/react-crypto-chart/blob/readme/TYPES.md#histogram-config-type" target="_blank" rel="noopener noreferrer">Histogram Config type</a></td>
    <td class="tg-0pky">
    <pre>{
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
    }
  </pre>
    </td>
  </tr>
  <tr>
    <td class="tg-0pky">chartLayout</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object<br><a href="https://github.com/justinkx/react-crypto-chart/blob/readme/TYPES.md#chart-layout-types" target="_blank" rel="noopener noreferrer">Chart Layout types</a></td>
    <td class="tg-0pky">
    <pre>
    {
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
    }
    </pre>
    </td>
  </tr>
  <tr>
    <td class="tg-0pky">containerStyle</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Object</td>
    <td class="tg-0pky">
    <pre>
    {
      maxWidth: '100%',
      maxHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  </pre></td>
  </tr>
  <tr>
    <td class="tg-0pky">useFuturesTestnet</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Boolean</td>
    <td class="tg-0pky">
    <pre>false</pre>
    </td>
  </tr>
   <tr>
    <td class="tg-0pky">useSpotTestnet</td>
    <td class="tg-0pky">No</td>
    <td class="tg-0pky">Boolean</td>
    <td class="tg-0pky">
    <pre>false</pre>
    </td>
  </tr>
</tbody>
</table>

## Authors

- **Justin K Xavier** - _Initial work_ - [LinkedIn](https://www.linkedin.com/in/justin-k-xavier-59b82710a/)

See also the list of [contributors](https://github.com/justinkx/RNChallenge_1/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

<p align="center">😊Pull requests accepted with ❤️</p>
