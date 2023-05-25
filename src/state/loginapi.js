import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
// export const loginSlice = createApi({
//   reducerPath: "auth",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://dlya-backend-test.herokuapp.com",
//   }),
//   endpoints: (builder) => ({
//     loginAdmin: builder.mutation({
//       query: (body) => ({
//         url: "/dashboard/login-admin",
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const { useLoginAdminMutation } = loginSlice;

export const loginSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dlya-backend-test.herokuapp.com/dashboard",
  }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => ({
        url: "/login-admin",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => {
        if (response.data?.message === "User Logged In") {
          const { authorization } = response.headers;
          const token = authorization ? authorization.split(" ")[1] : "";
          const userdata = response.data.data || {};
          return { token, userdata };
        } else {
          throw new Error(response.data?.message || "Login failed");
        }
      },
    }),
  }),
});

export const { useLoginAdminMutation } = loginSlice;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    userdata: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserdata: (state, action) => {
      state.userdata = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled") && action.payload?.token,
      (state, action) => {
        state.token = action.payload.token;
        state.userdata = action.payload.userdata;
      }
    );
  },
});

export const { setToken, setUserdata } = authSlice.actions;

export default authSlice.reducer;
