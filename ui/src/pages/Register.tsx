// src/pages/Register.tsx
import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await auth?.signUp(email, password, { email });
            alert('Registration successful! Please check your email for verification.');
            navigate('/login');
        } catch (error: any) {
            console.log('Error signing up', error);
            alert('Error signing up: ' + error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography variant="h5" gutterBottom>
                    Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        required
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        helperText="Minimum 8 characters, including letters and numbers."
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;
