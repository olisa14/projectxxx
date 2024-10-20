// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import {Typography, Grid2 as Grid, Box, Paper, Button} from '@mui/material';
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

const Trade: React.FC<DashboardProps> = ({currentUser}) => {
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
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography variant="h4" gutterBottom>
                Trade
            </Typography>


            <Grid container spacing={2}>

                {/* TradingView Chat */}
                <Grid size={{xs:12, lg:9, md:12}}>
                    <TradingViewChat />
                </Grid>
                {/* Trade Form */}
                <Grid size={{ xs:12, lg:3, md:12}}>
                    <TradeForm />
                </Grid>
                {/* Buy Insurance Section */}
                {/*<Grid size={{xs:12, md:4}}>*/}
                {/*    <InsuranceSection />*/}
                {/*</Grid>*/}
                {/* Connect Brokerage Account Section */}
                {/*<Grid size={{xs:12}}>*/}
                {/*    <Paper*/}
                {/*        elevation={3}*/}
                {/*        sx={{*/}
                {/*            padding: 2,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Typography variant="h6">Connect Brokerage Account</Typography>*/}
                {/*        /!* Implement brokerage connection components here *!/*/}
                {/*        /!* Placeholder content *!/*/}
                {/*        <br/>*/}
                {/*        <Button variant="contained" color="primary" >*/}
                {/*            Connect Brokerage*/}
                {/*        </Button>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

                {/*/!* Trades Section *!/*/}
                {/*<Grid size={{ xs:12, md:6}}>*/}
                {/*    <TradeList />*/}
                {/*</Grid>*/}






            </Grid>
        </Box>
    );
};

export default Trade;
