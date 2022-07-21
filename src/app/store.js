import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../reducers/apiSlice.js";
import usersSlice from "../reducers/usersSlice";
import productsSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    products: productsSlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
