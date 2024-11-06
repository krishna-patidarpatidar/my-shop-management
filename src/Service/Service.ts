import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const shopApiSlice = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("auth");
      if (token) {
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),

  tagTypes: ['customer,vender,product,invoice, dashbord,transaction'],
  endpoints: () => ({})
})

export default shopApiSlice;