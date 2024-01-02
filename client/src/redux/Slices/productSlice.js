import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProduct: [],
    searchProductLoading: false
}

export const getProducts = createAsyncThunk("product/getProductStatus", async () => {
    const response = await fetch(`http://localhost:7000/api/product/`);
    const data = await response.json();
    return data;
})


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handleSearchProductLoading : (state, action) => {
            state.searchProductLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.allProduct = [...action.payload]
        })
    }
});


export const { handleSearchProductLoading } = productSlice.actions

export default productSlice.reducer;