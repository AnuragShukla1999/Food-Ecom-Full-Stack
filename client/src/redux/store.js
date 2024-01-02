import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import loadingReducer from "./Slices/loadingSlice";
import productReducer from "./Slices/productSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        loadingData: loadingReducer,
        products: productReducer,
    }
});


export default store;