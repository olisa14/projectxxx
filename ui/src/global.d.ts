// global.d.ts
export {};

declare global {
    interface Window {
        TradingView: any;  // Adjust the type as per the TradingView API if needed
    }
}
