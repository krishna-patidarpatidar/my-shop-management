import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const shopApiSlice = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  tagTypes: ['customer,product,invoice'],
  endpoints: () => ({})
})

export default shopApiSlice