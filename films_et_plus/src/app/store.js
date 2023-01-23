import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from '../features/users/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: applyMiddleware(logger),
})

export default store;
