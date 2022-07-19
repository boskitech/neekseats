import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async (userid) => {
    const response = await axios.get(
      `http://localhost:5000/api/cart/user/${userid}`
    );
    return response.data;
  }
);

export const addToCart = createAsyncThunk("cart/addToCart", async (id) => {
  const response = await axios.post(`http://localhost:5000/api/cart/`);
  return response.data;
});

export const patchQuanity = createAsyncThunk(
  "cart/patchQuantity",
  async (userid) => {
    const response = await axios.get(
      `http://localhost:5000/api/product/category/${userid}`
    );
    return response.data;
  }
);

export const patchColor = createAsyncThunk(
  "cart/patchColor",
  async (userid) => {
    const response = await axios.get(
      `http://localhost:5000/api/product/category/${userid}`
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "cart/patchColor",
  async (userid) => {
    const response = await axios.get(
      `http://localhost:5000/api/cart/${userid}`
    );
    return response.data;
  }
);

export const clearCart = createAsyncThunk("cart/clearCart", async (userid) => {
  const response = await axios.delete(
    `http://localhost:5000/api/cart/clearcart/${userid}`
  );
  return response.data;
});

const initialState = {
  cart: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCartProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.cart = action.payload;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(patchQuanity.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(patchQuanity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(patchQuanity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(patchColor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(patchColor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(patchColor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(clearCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const cartStatus = (state) => state.cart.status;
export const selectAllCart = (state) => state.cart.cart;
export const selectByCategory = (state) => state.users.productsCategory;

export default cartSlice.reducer;
