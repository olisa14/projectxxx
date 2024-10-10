// src/App.tsx
import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { AuthUser } from 'aws-amplify/auth';


const App: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/callback') {

        }
    }, [location]);

    return (

        <Authenticator>
            {({signOut, user}) => (
                <>
                        <Routes>
                            <Route path="/" element={<Dashboard currentUser={user as AuthUser} />}/>
                            {/*<Route path="/register" element={<Register/>}/>*/}
                            <Route path="/dash2" element={<Dashboard2/>}/>
                            <Route path="/dashboard" element={ <Dashboard currentUser={user as AuthUser}/>} />
                            {/* Add a callback route if using Hosted UI */}
                            <Route path="/callback" element={<div>Loading...</div>}/>
                        </Routes>

                </>
            )}
        </Authenticator>

    );
};

export default App;
