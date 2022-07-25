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

export const fetchSearchProducts = createAsyncThunk(
  "products/fetchSearchProducts",
  async (key) => {
    const response = await axios.get(
      `http://localhost:5200/api/product/search/${key}`
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
  product: [],
  searchProducts: [],
  productsCategory: [],
  status: "idle",
  oneProdStatus: "idle",
  searchStatus: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.oneProdStatus = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOneProduct.pending, (state, action) => {
        state.oneProdStatus = "loading";
      })
      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.oneProdStatus = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchOneProduct.rejected, (state, action) => {
        state.oneProdStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSearchProducts.pending, (state, action) => {
        state.searchStatus = "loading";
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.searchStatus = "succeeded";
        state.searchProducts = action.payload;
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.searchStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      });
  },
});

export const { changeStatus } = productsSlice.actions;
export const productStatus = (state) => state.products.status;
export const OneProdStatus = (state) => state.products.oneProdStatus;
export const selectSearchStatus = (state) => state.products.searchStatus;
export const selectAllProducts = (state) => state.products.products;
export const selectSearchProducts = (state) => state.products.searchProducts;
export const selectProduct = (state) => state.products.product;
export const selectByCategory = (state) => state.products.productsCategory;

export default productsSlice.reducer;
