// Dependency Imports
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger";
// Local Imports
import userReducer from '../features/users/userSlice';
import movieReducer from '../features/movie/movieSlice';


const middleware = [ createLogger() ];


export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware,
});


export default store;
