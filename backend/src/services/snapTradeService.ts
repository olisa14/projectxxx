import axios from 'axios';

const SNAPTRADE_BASE_URL = 'https://api.snaptrade.com';

export const getUserPortfolio = async (accountId: string) => {
    const response = await axios.get(`${SNAPTRADE_BASE_URL}/accounts/${accountId}/portfolio`,
        {
        headers: { Authorization: `Bearer ${process.env.SNAPTRADE_API_KEY}` }
    });
    return response.data;
};

export const placeTrade = async (accountId: string, tradeDetails: any) => {
    const response = await axios.post(`${SNAPTRADE_BASE_URL}/accounts/${accountId}/trades`, tradeDetails, {
        headers: { Authorization: `Bearer ${process.env.SNAPTRADE_API_KEY}` }
    });
    return response.data;
};
