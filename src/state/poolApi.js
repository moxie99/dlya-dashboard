import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const poolApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL2,
    prepareHeaders: (headers) => {
      const accesstoken = localStorage.getItem("access_token");
      if (accesstoken) {
        headers.set("Authorization", `Bearer ${accesstoken}`);
      }
      return headers;
    },
  }),
  reducerPath: "poolApi",
  tagTypes: ["getAllRequests", "createPools", "getPools"],

  endpoints: (build) => ({
    getAllRequests: build.query({
      query: () => "",
      providesTags: ["getAllRequests"],
    }),
    createPool: build.query({
      query: (data) => ({
        url: "pool/create-pool",
        method: "POST",
        body: data,
      }),
      providesTags: ["createPools"],
    }),
    getPools: build.query({
      query: () => "pool/",
      providesTags: ["getPools"],
    }),
  }),
});

export const { useGetAllRequestsQuery, useCreatePoolQuery, useGetPoolsQuery } =
  poolApi;
