// src/index.tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppTheme from './theme/AppTheme';
import { Amplify } from 'aws-amplify';
import  {awsmobile,awsConfig} from './aws-exports';


Amplify.configure({ ...awsmobile });

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/*<ThemeProvider theme={AppTheme}>*/}
        <AppTheme>
            <CssBaseline /> {/* Provides a consistent baseline */}

                    <Router>
                        <App/>

                    </Router>

        </AppTheme>
        {/*</ThemeProvider>*/}
    </React.StrictMode>
);


