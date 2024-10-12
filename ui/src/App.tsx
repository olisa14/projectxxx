// src/App.tsx
import React, {useEffect} from 'react';
import {Routes, Route, useLocation, Link} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { AuthUser } from 'aws-amplify/auth';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SideMenu from "./components/SideMenu";
import AppNavbar from "./components/AppNavbar";
import {alpha} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import AppTheme from "./theme/AppTheme";
import type {} from '@mui/material/themeCssVarsAugmentation';

import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from './theme/customizations';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

const App: React.FC = (props: { disableCustomTheme?: boolean }) => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/callback') {

        }
    }, [location]);

    return (

        <Authenticator>
            {({signOut, user}) => (
                <>

                    <AppTheme {...props} themeComponents={xThemeComponents}>
                        <CssBaseline enableColorScheme />
                        <Box sx={{ display: 'flex' }}>
                            <SideMenu />
                            <AppNavbar />
                            {/* Main content */}
                            <Box
                                component="main"
                                sx={(theme) => ({
                                    flexGrow: 1,
                                    backgroundColor: theme.vars
                                        ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                                        : alpha(theme.palette.background.default, 1),
                                    overflow: 'auto',
                                })}
                            >
                                <Stack
                                    spacing={2}
                                    sx={{
                                        alignItems: 'center',
                                        mx: 3,
                                        pb: 5,
                                        mt: { xs: 8, md: 0 },
                                    }}
                                >
                                    <Header />
                                    <Link to="dashboard"> To main dash</Link>
                                    <Routes>
                                        {/*<Route path="/" element={<Dashboard currentUser={user as AuthUser} />}/>*/}
                                        <Route path="/" element={<MainGrid/>}/>
                                        <Route path="/dashboard" element={ <Dashboard currentUser={user as AuthUser}/>} />
                                        {/* Add a callback route if using Hosted UI */}
                                        <Route path="/callback" element={<div>Loading...</div>}/>
                                    </Routes>
                                </Stack>
                            </Box>
                        </Box>
                    </AppTheme>
                </>
            )}
        </Authenticator>

    );
};

export default App;
