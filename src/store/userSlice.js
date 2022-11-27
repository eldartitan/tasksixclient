import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const API_URL = "http://localhost:3001/api";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios
        .get(`${API_URL}/users`, { withCredentials: true })
        .then((res) => res);
      if (![200, 201].includes(response.status)) {
        throw new Error("Server Error!");
      }
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async function ({username}, { rejectWithValue }) {
    try {
      const response = await axios
        .get(`${API_URL}/users/user`, {
          params: {username}
        }, { withCredentials: true })
        .then((res) => res);
      if (![200, 201].includes(response.status)) {
        throw new Error("Server Error!");
      }
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "user/sendMessage",
  async function (data, { rejectWithValue }) {
    try {
      const response = await axios
        .post(`${API_URL}/users/send`, data, { withCredentials: true })
        .then((res) => res);
      if (![200, 201].includes(response.status)) {
        throw new Error("Server Error!");
      }
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  loading: null,
  error: null,
  status: false,
  logUser: null,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    })
    .addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.logUser = action.payload;
    })
    .addCase(sendMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(sendMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    })
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer