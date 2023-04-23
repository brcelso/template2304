"use client"

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "AAPL|1D"
            ],
            [
              "Google",
              "GOOGL|1D"
            ],
            [
              "Microsoft",
              "MSFT|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "Courier New, monospace",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "percent-only",
          "chartType": "candlesticks",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineType": 0,
          "upColor": "rgba(255, 255, 255, 1)",
          "downColor": "rgba(0, 0, 0, 1)",
          "borderUpColor": "rgba(255, 255, 255, 1)",
          "borderDownColor": "rgba(255, 255, 255, 1)",
          "wickUpColor": "rgba(255, 255, 255, 1)",
          "wickDownColor": "rgba(255, 255, 255, 1)"
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={contariner}>
    </div>
  );
}

export default memo(TradingViewWidget);
