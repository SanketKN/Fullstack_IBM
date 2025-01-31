import {configureStore} from "@reduxjs/toolkit";
import ProductsListReducer from "./producListSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer:{
        products: ProductsListReducer,
        auth: authReducer
    }
})

// dispatch help us dispatch the actions connected to the components.
export type AppDispatch = typeof store.dispatch
export default store

// this returns the current state.
export type RootState = ReturnType<typeof store.getState>