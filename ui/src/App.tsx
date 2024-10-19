// src/App.tsx
import React, {useEffect} from 'react';
import {Routes, Route, useLocation, Link} from 'react-router-dom';
import Trade from './pages/Trade';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { AuthUser } from 'aws-amplify/auth';
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SideMenu from "./components/SideMenu";
import AppNavbar from "./components/AppNavbar";
import {alpha} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import AppTheme from "./theme/AppTheme";
import Home from "./assets/Home";
import Transactions from "./assets/Transactions";
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

                    <AppTheme {...props} themeComponents={xThemeComponents} disableCustomTheme={false}>
                        {/*<CssBaseline enableColorScheme />*/}
                        <Box sx={{ display: 'flex' }}>
                            <SideMenu currentUser={user as AuthUser} onSignOut={signOut}/>
                            <AppNavbar currentUser={user as AuthUser} />
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
                                    <Routes>
                                        {/*<Route path="/" element={<Dashboard currentUser={user as AuthUser} />}/>*/}
                                        <Route index element={<Home/>}/>
                                        <Route path="/home" element={<Home/>}/>
                                        <Route path="/transactions" element={<Transactions/>}/>
                                        <Route path="/trade" element={ <Trade currentUser={user as AuthUser}/>} />
                                        {/* Add a callback route if using Hosted UI */}
                                        <Route path="/callback" element={<div>Loading...</div>}/>
                                        {/*<Route path="*" element={<NoMatch/>}/>*/}
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
