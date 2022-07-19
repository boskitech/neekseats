import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5200/api/users/getusers");
  return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const response = await axios.get(
    `http://localhost:5200/api/users/getUser/${id}`
  );
  return response.data;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (initialPost) => {
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      initialPost
    );
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (loginPost) => {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      loginPost
    );
    return response.data;
  }
);

const initialState = {
  users: [],
  user: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const postStatus = (state) => state.users.status;
export const selectAllUsers = (state) => state.users.users;
export const selectUser = (state) => state.users.user;

export default usersSlice.reducer;
