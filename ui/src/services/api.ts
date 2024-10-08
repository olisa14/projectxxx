// src/services/api.ts
import axios from 'axios';
import { fetchAuthSession } from '@aws-amplify/auth';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8181/api',
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
    async (config) => {
        // const user = await Auth.currentAuthenticatedUser();
        const session = await fetchAuthSession();
        const token = session?.tokens?.idToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
