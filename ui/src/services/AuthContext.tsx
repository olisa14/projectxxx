// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
// import Auth from '@aws-amplify/auth'; // Default import
import {getCurrentUser} from '@aws-amplify/auth'; // Default import

interface AuthContextType {
    user: any;
    signOut: () => Promise<void>;
    signIn: (username: string, password: string) => Promise<void>;
    signUp: (username: string, password: string, attributes?: any) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch {
                setUser(null);
            }
        };
        fetchUser();

        // Optionally, subscribe to authentication events
        const listener = (event: string, data: any) => {
            if (event === 'signIn') {
                setUser(data);
            } else if (event === 'signOut') {
                setUser(null);
            }
        };
        // Auth.configure({ listeners: { onAuthEvent: listener } });

        return () => {
            // Clean up listeners if necessary
        };
    }, []);

    const signOut = async () => {
        try {
            // await Auth.signOut();
            setUser(null);
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    };

    const signIn = async (username: string, password: string) => {
        try {
            // const user = await Auth.signIn(username, password);
            setUser(user);
        } catch (error) {
            console.log('Error signing in', error);
            throw error;
        }
    };

    const signUp = async (username: string, password: string, attributes: any = {}) => {
        try {
            // await Auth.signUp({ username, password, attributes });
        } catch (error) {
            console.log('Error signing up', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, signOut, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};
