<h2 id="layout">Chart Layout types</h2>

```typescript
{
    layout?: {
        backgroundColor: string;
        textColor: string;
    };
    grid?: {
        vertLines?: {
        color: string;
        style: LineStyle;
        };
        horzLines?: {
        color: "#838fa3";
        style: LineStyle;
        };
    };
    crosshair?: {
        mode: CrosshairMode;
    };
    priceScale?: {
        borderColor: string;
    };
    timeScale?: {
        borderColor: string;
        timeVisible: boolean;
        secondsVisible: boolean;
    };
}
```

<h2 id="candlestick">Candlestick Config type</h2>

```typescript
{
    upColor?: string;
    downColor?: string;
    borderDownColor?: string;
    borderUpColor?: string;
    wickDownColor?: string;
    wickUpColor?: string;
}
```

<h2 id="histogram">Histogram Config type</h2>

```typescript
{
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
```
