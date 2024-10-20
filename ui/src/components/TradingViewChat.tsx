import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import TradingViewWidget from "./TradingViewWidget";


const TradingViewChat: React.FC = () => {
    return (
        <Card elevation={3} >
        {/*<Card elevation={3} sx={{ padding: 2, height: '500px' }}>*/}
            <CardContent>
                {/*<Typography variant="h6" gutterBottom>*/}
                {/*    TradingView Chat*/}
                {/*</Typography>*/}
                {/* Embed TradingView chat widget here */}
                <TradingViewWidget />
            </CardContent>
        </Card>
    );
};

export default TradingViewChat;
