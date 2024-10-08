// src/index.tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { Amplify } from 'aws-amplify';
// import { Auth } from '@aws-amplify/auth';
import  {awsmobile,awsConfig} from './aws-exports';
import {Authenticator} from "@aws-amplify/ui-react";
// import '@aws-amplify/ui-react/styles.css';
// import { AuthProvider } from './services/AuthContext';


Amplify.configure({ ...awsmobile });

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <br/>
            <CssBaseline /> {/* Provides a consistent baseline */}

                    <Router>
                        <App/>

                    </Router>

        </ThemeProvider>
    </React.StrictMode>
);


