import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5200/api/users/getusers");
  return response.data;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (initialPost) => {
    const response = await axios.post(
      "http://localhost:5200/api/users/register",
      initialPost,
      {}
    );
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (loginPost) => {
    const response = await axios.post(
      "http://localhost:5200/api/users/login/",
      loginPost,
      {}
    );
    return response.data;
  }
);

const initialState = {
  users: [],
  user: [],
  token: false,
  status: "idle",
  addUserStatus: "idle",
  loginStatus: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setToken: (state) => {
      state.token = true;
    },
    checkUser: (state) => {
      if (localStorage.getItem("user")) {
        state.user = JSON.parse(localStorage.getItem("user"));
      }else{
        state.user = []
      }
    },
  },
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
        state.addUserStatus = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.addUserStatus = "succeeded";
        state.registerResponse = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.addUserStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loginStatus = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        const data = action.payload;
        const user = data.user;
        const token = data.token;
        delete user.password;
        state.user = JSON.stringify(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        state.token = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setToken, checkUser } = usersSlice.actions;
export const user = (state) => state.users.user;
export const token = (state) => state.users.token;
export const loginStatus = (state) => state.users.loginStatus;
export const addUserStatus = (state) => state.users.addUserStatus;
export const fetchUserStatus = (state) => state.users.status;

export default usersSlice.reducer;
