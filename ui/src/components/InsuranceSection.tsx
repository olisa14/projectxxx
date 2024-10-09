// src/components/InsuranceSection.tsx
import React, { useEffect, useState } from 'react';
import {
    Typography,
    Card,
    CardContent,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Grid2 as Grid,
    Box,
} from '@mui/material';
import api from '../services/api';

interface Insurance {
    _id: string;
    premium: number;
    coverageAmount: number;
    startDate: string;
    endDate: string;
    active: boolean;
}

const InsuranceSection: React.FC = () => {
    const [insurance, setInsurance] = useState<Insurance | null>(null);
    const [premium, setPremium] = useState<number>(0);
    const [coverageAmount, setCoverageAmount] = useState<number>(0);
    const [duration, setDuration] = useState<'daily' | 'monthly'>('daily');

    useEffect(() => {
        const fetchInsurance = async () => {
            try {
                const res = await api.get('/insurance', {
                });
                setInsurance(res.data);
            } catch (err) {
                console.log('No active insurance');
            }
        };

        fetchInsurance();
    }, []);

    const handleBuyInsurance = async () => {
        try {
            const res = await api.post(
                '/insurance/buy',
                { premium, coverageAmount, duration }
            );
            setInsurance(res.data);
            alert('Insurance purchased successfully');
        } catch (err) {
            console.error(err);
            alert('Failed to buy insurance');
        }
    };

    return (
        <Card elevation={3} sx={{ padding: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Insurance
                </Typography>
                {insurance ? (
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, sm:6}}>
                                <Typography variant="body1">
                                    <strong>Premium:</strong> ${insurance.premium.toFixed(2)}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Coverage Amount:</strong> ${insurance.coverageAmount.toFixed(2)}
                                </Typography>
                            </Grid>
                            <Grid size={{xs:12, sm:6}}>
                                <Typography variant="body1">
                                    <strong>Valid From:</strong> {new Date(insurance.startDate).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>To:</strong> {new Date(insurance.endDate).toLocaleDateString()}
                                </Typography>
                            </Grid>
                            <Grid size={{xs:12}}>
                                <Typography variant="body1">
                                    <strong>Status:</strong> {insurance.active ? 'Active' : 'Inactive'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                ) : (
                    <Box component="form" noValidate autoComplete="off">
                        <Typography variant="subtitle1" gutterBottom>
                            Buy Insurance
                        </Typography>
                        <TextField
                            label="Premium"
                            variant="outlined"
                            type="number"
                            value={premium}
                            onChange={(e) => setPremium(parseFloat(e.target.value))}
                            required
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Coverage Amount"
                            variant="outlined"
                            type="number"
                            value={coverageAmount}
                            onChange={(e) => setCoverageAmount(parseFloat(e.target.value))}
                            required
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="duration-label">Duration</InputLabel>
                            <Select
                                labelId="duration-label"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value as 'daily' | 'monthly')}
                                label="Duration"
                            >
                                <MenuItem value="daily">Daily</MenuItem>
                                <MenuItem value="monthly">Monthly</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" onClick={handleBuyInsurance} fullWidth>
                            Buy Insurance
                        </Button>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default InsuranceSection;
