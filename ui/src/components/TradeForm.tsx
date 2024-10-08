// src/components/TradeForm.tsx
import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Grid,
    Box,
} from '@mui/material';
import api from '../services/api';

const TradeForm: React.FC = () => {
    const [symbol, setSymbol] = useState('');
    const [type, setType] = useState<'buy' | 'sell'>('buy');
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post(
                '/trades',
                { symbol, type, quantity, price }
            );
            alert('Trade placed successfully');
            // Optionally, refresh trades or reset form
            setSymbol('');
            setType('buy');
            setQuantity(0);
            setPrice(0);
        } catch (err) {
            console.error(err);
            alert('Failed to place trade');
        }
    };

    return (
        <Card elevation={3} sx={{ padding: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Place a Trade
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Symbol"
                        variant="outlined"
                        type="text"
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            value={type}
                            onChange={(e) => setType(e.target.value as 'buy' | 'sell')}
                            label="Type"
                        >
                            <MenuItem value="buy">Buy</MenuItem>
                            <MenuItem value="sell">Sell</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Price"
                                variant="outlined"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Place Trade
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TradeForm;
