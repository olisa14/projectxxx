import React from 'react';
import { Box, Typography, Grid2, Paper, Grow } from '@mui/material';

const features = [
    { title: 'Real-Time Coverage', description: 'Stay protected as you trade, with instant coverage adjustments.' },
    { title: 'Expert Consultation', description: 'Consult with our insurance experts to tailor your plan.' },
    { title: 'Flexible Premiums', description: 'Choose a plan that fits your trading style and budget.' },
    { title: 'Comprehensive Reports', description: 'Get detailed reports to manage your risks effectively.' },
];

const Features: React.FC = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" align="center">Key Features</Typography>
            <Grid2 container spacing={2} sx={{ mt: 2 }}>
                {features.map((feature, index) => (
                    <Grid2 key={feature.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                        <Grow in timeout={(index + 1) * 200}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="h6">{feature.title}</Typography>
                                <Typography variant="body2">{feature.description}</Typography>
                            </Paper>
                        </Grow>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default Features;
