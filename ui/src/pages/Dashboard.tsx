// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import {Typography, Grid, Box, Paper, Button} from '@mui/material';
import TradeList from '../components/TradeList';
import InsuranceSection from '../components/InsuranceSection';
import TradeForm from '../components/TradeForm';
import TradingViewChat from '../components/TradingViewChat';
import api from "../services/api";
import { getCurrentUser } from '@aws-amplify/auth';
import { AuthUser } from 'aws-amplify/auth';

interface DashboardProps{
    currentUser: AuthUser;
}

const Dashboard: React.FC<DashboardProps> = ({currentUser}) => {
    const [user, setUser] = useState<AuthUser>(currentUser);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const ccurrentUser = await getCurrentUser();
                setUser(ccurrentUser);
            } catch (error) {
                console.error('Error fetching authenticated user:', error);
            }
        };

        fetchUser();
    }, []);

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         const token = localStorage.getItem('token');
    //         try {
    //             const res = await api.get('/users/profile');
    //             setUser(res.data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    //
    //     fetchProfile();
    // }, []);

    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>


            <Grid container spacing={3}>

                {/* TradingView Chat */}
                <Grid item xs={12}>
                    <TradingViewChat />
                </Grid>
                {/* Trade Form */}
                <Grid item xs={12}>
                    <TradeForm />
                </Grid>

                {/* Connect Brokerage Account Section */}
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 2,
                        }}
                    >
                        <Typography variant="h6">Connect Brokerage Account</Typography>
                        {/* Implement brokerage connection components here */}
                        {/* Placeholder content */}
                        <br/>
                        <Button variant="contained" color="primary" >
                            Connect Brokerage
                        </Button>
                    </Paper>
                </Grid>

                {/* Trades Section */}
                <Grid item xs={12} md={6}>
                    <TradeList />
                </Grid>

                {/* Buy Insurance Section */}
                <Grid item xs={12} md={6}>
                    <InsuranceSection />
                </Grid>




            </Grid>
        </Box>
    );
};

export default Dashboard;
