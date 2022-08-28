import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://netporch.herokuapp.com/api/product/");
    return response.data;
  }
);

export const fetchOneProduct = createAsyncThunk(
  "products/fetchOneProduct",
  async (id) => {
    const response = await axios.get(
      `https://netporch.herokuapp.com/api/product/getone/${id}`
    );
    return response.data;
  }
);

export const fetchSearchProducts = createAsyncThunk(
  "products/fetchSearchProducts",
  async (key) => {
    const response = await axios.get(
      `https://netporch.herokuapp.com/api/product/search/${key}`
    );
    return response.data;
  }
);

export const fetchProductByCategory = createAsyncThunk(
  "products/fetchProductByCategory",
  async (category) => {
    const response = await axios.get(
      `https://netporch.herokuapp.com/api/product/category/${category}`
    );
    return response.data;
  }
);

export const fetchProductsByFilter = createAsyncThunk(
  "products/fetchProductByFilter",
  async (meta) => {
    const response = await axios.post(
      `https://netporch.herokuapp.com/api/product/filter/`,
      meta,
      {}
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
  filterStatus:"idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.oneProdStatus = "idle";
    },
    newestItems: (state) => {
      state.products = state.products.sort((a,b) => parseInt(b.productQuantity) - parseInt(a.productQuantity))
    },
    lowestItems: (state) => {
      state.products = state.products.sort((a,b) => parseFloat(a.productPrice) - parseFloat(b.productPrice))
    },
    highestItems: (state) => {
      state.products = state.products.sort((a,b) => parseFloat(b.productPrice) - parseFloat(a.productPrice))
    }
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
      })
      .addCase(fetchProductsByFilter.pending, (state, action) => {
        state.filterStatus = "loading";
      })
      .addCase(fetchProductsByFilter.fulfilled, (state, action) => {
        state.filterStatus = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilter.rejected, (state, action) => {
        state.filterStatus = "failed";
        state.error = action.error.message;
      })
  },
});

export const { changeStatus, newestItems, lowestItems, highestItems } = productsSlice.actions;
export const productStatus = (state) => state.products.status;
export const OneProdStatus = (state) => state.products.oneProdStatus;
export const selectSearchStatus = (state) => state.products.searchStatus;
export const selectAllProducts = (state) => state.products.products;
export const selectSearchProducts = (state) => state.products.searchProducts;
export const selectProduct = (state) => state.products.product;
export const selectByCategory = (state) => state.products.productsCategory;

export default productsSlice.reducer;
