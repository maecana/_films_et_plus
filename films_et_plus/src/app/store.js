import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger";

import userReducer from '../features/users/userSlice';

const middleware = [ createLogger() ];

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware
})

export default store;
