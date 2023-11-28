import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, newsApi } from "./slice";

export const Store = configureStore({
    reducer : {
        [weatherApi.reducerPath] : weatherApi.reducer,
        [newsApi.reducerPath] : newsApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(weatherApi.middleware, newsApi.middleware)
    }
})