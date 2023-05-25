import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL2,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        headers.set("Authorization", accessToken);
      }
      return headers;
    },
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "Courses",
    "Pools",
    "Events",
    "Accomodation",
    "Feeds",
    "Groups",
    "Nominees",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),

    getDashboard: build.query({
      query: () => "/general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getCourses: build.query({
      query: () => "/course/all-course",
      providesTags: ["Courses"],
    }),
    getPools: build.query({
      query: () => "pool/",
      providesTags: ["Pools"],
    }),
    getEvents: build.query({
      query: () => "/event/get-events",
      providesTags: ["Events"],
    }),
    getAccommodation: build.query({
      query: () => "/accomodation/get-accomodation",
      providesTags: ["Accomodation"],
    }),
    getFeeds: build.query({
      query: () => "/feeds/",
      providesTags: ["Feeds"],
    }),
    getGroups: build.query({
      query: () => "/chat/get-groups-info",
      providesTags: ["Groups"],
    }),
    getNominees: build.query({
      query: (id) => `pool/nominees/${id}`,
      providesTags: ["Nominees"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetCoursesQuery,
  useGetPoolsQuery,
  useGetEventsQuery,
  useGetAccommodationQuery,
  useGetFeedsQuery,
  useGetGroupsQuery,
  useGetNomineesQuery,
} = api;
