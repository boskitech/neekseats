import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5200/api/product/");
    return response.data;
  }
);

export const fetchOneProduct = createAsyncThunk(
  "products/fetchOneProduct",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5200/api/product/getone/${id}`
    );
    return response.data;
  }
);

export const fetchProductByCategory = createAsyncThunk(
  "products/fetchProductByCategory",
  async (category) => {
    const response = await axios.get(
      `http://localhost:5200/api/product/category/${category}`
    );
    return response.data;
  }
);

const initialState = {
  products: [],
  productsCategory: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOneProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(fetchOneProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      });
  },
});

export const productStatus = (state) => state.products.status;
export const selectAllProducts = (state) => state.products.products;
export const selectByCategory = (state) => state.products.productsCategory;

export default productsSlice.reducer;
