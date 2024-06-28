import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../features/user/userSlice";
import styled from 'styled-components';
import movieReducer from '../features/user/movie/movieSlice'


export default configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer,
        


    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,

    }),
});

