// src/index.tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import { Amplify } from 'aws-amplify';
import  {awsmobile} from './aws-exports';
import './index.css';



Amplify.configure({ ...awsmobile });

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/*<ThemeProvider theme={AppTheme}>*/}
        <AppTheme>
            {/*<CssBaseline /> /!* Provides a consistent baseline *!/*/}

                    <Router future={{ v7_startTransition: true }} basename='/projectxxx'>
                        <App/>
                    </Router>

        </AppTheme>
        {/*</ThemeProvider>*/}
    </React.StrictMode>
);


