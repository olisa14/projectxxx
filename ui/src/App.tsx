// src/App.tsx
import React, {useEffect, useContext} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {CssBaseline, Container} from '@mui/material';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';
import Navbar from './components/Navbar';
import {AuthContext} from './services/AuthContext';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { AuthUser } from 'aws-amplify/auth';


const App: React.FC = () => {
    const location = useLocation();
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (location.pathname === '/callback') {
            // Auth.handleRedirectPromise()
            //     .then((user) => {
            //         if (user) {
            //             // User successfully signed in
            //         }
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //     });
        }
    }, [location]);

    return (

        <Authenticator>
            {({signOut, user}) => (
                <>
                    {/*<CssBaseline/>*/}
                    {/*<Navbar onSignOut={signOut} currentUser={user as AuthUser} />*/}
                    {/*<Container >*/}
                        <Routes>
                            <Route path="/" element={<Dashboard currentUser={user as AuthUser} />}/>
                            {/*<Route path="/register" element={<Register/>}/>*/}
                            <Route path="/dash2" element={<Dashboard2/>}/>
                            <Route path="/dashboard" element={ <Dashboard currentUser={user as AuthUser}/>} />
                            {/* Add a callback route if using Hosted UI */}
                            <Route path="/callback" element={<div>Loading...</div>}/>
                        </Routes>
                    {/*</Container>*/}
                </>
            )}
        </Authenticator>

    );
};

export default App;
