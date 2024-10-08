// src/components/TradeList.tsx
import React, { useEffect, useState } from 'react';
import {
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Box,
} from '@mui/material';
import api from '../services/api';

interface Trade {
    _id: string;
    symbol: string;
    quantity: number;
    price: number;
    type: 'buy' | 'sell';
    timestamp: string;
}

const TradeList: React.FC = () => {
    const [trades, setTrades] = useState<Trade[]>([]);

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const res = await api.get('/trades', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setTrades(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTrades();
    }, []);

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Your Trades
            </Typography>
            <Table aria-label="trades table">
                <TableHead>
                    <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Timestamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trades.map((trade) => (
                        <TableRow key={trade._id}>
                            <TableCell>{trade.symbol}</TableCell>
                            <TableCell>
                                <Typography
                                    color={trade.type === 'buy' ? 'success.main' : 'error.main'}
                                    fontWeight="bold"
                                >
                                    {trade.type.toUpperCase()}
                                </Typography>
                            </TableCell>
                            <TableCell>{trade.quantity}</TableCell>
                            <TableCell>${trade.price.toFixed(2)}</TableCell>
                            <TableCell>{new Date(trade.timestamp).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default TradeList;
