import React, { useEffect, useRef } from 'react';

const TradingViewWidget: React.FC = () => {
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure window.TradingView is available after loading the script
        if (widgetRef.current) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;

            script.onload = () => {
                if (window.TradingView) {
                    new window.TradingView.widget({
                        container_id: 'tradingview-widget',
                        autosize: true,
                        symbol: 'NASDAQ:AAPL', // Change the symbol as per your need
                        interval: 'D',
                        timezone: 'Etc/UTC',
                        theme: 'light',
                        style: '1',
                        locale: 'en',
                        toolbar_bg: '#f1f3f6',
                        enable_publishing: false,
                        allow_symbol_change: true,
                        details: true,
                        hotlist: true,
                        calendar: true,
                    });
                }
            };

            widgetRef.current.appendChild(script);
        }
    }, []);

    return (
        <div ref={widgetRef}>
            <div id="tradingview-widget" style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
};

export default TradingViewWidget;
