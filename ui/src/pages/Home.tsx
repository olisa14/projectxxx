// src/pages/Home.tsx
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Box textAlign="center" mt={10}>
            <Typography variant="h3" gutterBottom>
                Welcome to Bernoulli Insurance
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/register"
                    sx={{ mr: 2 }}
                >
                    Register
                </Button>
                <Button variant="outlined" color="primary" component={RouterLink} to="/login">
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
