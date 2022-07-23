import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async (userid) => {
    const response = await axios.get(
      `http://localhost:5200/api/cart/user/${userid}`
    );
    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (postData) => {
    const response = await axios.post(
      `http://localhost:5200/api/cart/`,
      postData,
      {}
    );
    return response.data;
  }
);

export const patchQuantity = createAsyncThunk(
  "cart/patchQuantity",
  async ({ itemId, quantity }) => {
    const data = { quantity: quantity };
    const response = await axios.patch(
      `http://localhost:5200/api/cart/quantity/${itemId}`,
      data,
      {}
    );
    return response.data;
  }
);

export const patchColor = createAsyncThunk(
  "cart/patchColor",
  async ({ itemId, color }) => {
    console.log(color, itemId);
    const response = await axios.patch(
      `http://localhost:5200/api/cart/colour/${itemId}`,
      { color: color },
      {}
    );
    return response.data;
  }
);

export const deleteItem = createAsyncThunk(
  "cart/deleteItem",
  async (itemId) => {
    const response = await axios.delete(
      `http://localhost:5200/api/cart/${itemId}`
    );
    return response.data;
  }
);

export const clearCart = createAsyncThunk("cart/clearCart", async (userid) => {
  const response = await axios.delete(
    `http://localhost:5200/api/cart/clearcart/${userid}`
  );
  return response.data;
});

const initialState = {
  cart: [],
  cartStatus: "idle",
  addToCartStatus: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCartProducts.pending, (state, action) => {
        state.cartStatus = "loading";
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.cartStatus = "succeeded";
        // Add any fetched posts to the array
        state.cart = action.payload;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.cartStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.addToCartStatus = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.addToCartStatus = "succeeded";
        state.cart.unshift(action.payload.item);
        console.log(action.payload.item);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.addToCartStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(patchQuantity.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(patchQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(patchQuantity.rejected, (state, action) => {
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
      .addCase(deleteItem.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteItem.rejected, (state, action) => {
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

export const cartStatus = (state) => state.cart.cartStatus;
export const addToCartStatus = (state) => state.cart.addToCartStatus;
export const selectUserCart = (state) => state.cart.cart;

export default cartSlice.reducer;
