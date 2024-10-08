// src/components/Navbar.tsx
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {AuthUser} from "aws-amplify/auth";

interface NavbarProps{
    onSignOut: any;
    currentUser: AuthUser;

}
const Navbar: React.FC<NavbarProps> = ({onSignOut,currentUser}) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{ flexGrow: 1, color: '#fff', textDecoration: 'none' }}
                >
                    Trade Insurance
                </Typography>

                    <>
                        <Typography variant="subtitle1" gutterBottom>
                            Welcome, {currentUser.username}
                        </Typography>
                        <Button color="inherit" onClick={onSignOut}>
                            Logout
                        </Button>
                    </>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
