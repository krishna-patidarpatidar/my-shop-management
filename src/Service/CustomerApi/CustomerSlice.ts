import shopApiSlice from "../Service";



const CustomerApiSlice = shopApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createCustomer: builder.mutation({
      query: ({ customerData }: any) => ({
        url: `/customer/createCustomer`,
        method: "POST",
        body: customerData,
      }),
      invalidatesTags: ['customer']
    }),
    customerDelete: builder.mutation({
      query: ({ id }: any) => ({
        url: `/customer/deleteCustomer/${id}`,
        method: "DELETE",

      }),
      invalidatesTags: ['customer']
    }),
    getCustomer: builder.query({
      query: () => ({
        url: `/customer/getAllCustomer`,
        method: "GET",
      }),
      providesTags: ['customer']
    }),
    getSingleCustomer: builder.query({
      query: ({ id }: any) => ({
        url: `/customer/getSingleCustomer/${id}`,
        method: "GET",
      }),
      providesTags: ['customer']
    }),
    getCustomerTransaction: builder.query({
      query: ({ id }: any) => ({
        url: `/customerReceivedAmount/receivedInvoices/${id}`,
        method: "GET",
      }),
      providesTags: ['customer']
    }),
    customerEdit: builder.mutation({
      query: ({ customerData, id }: any) => ({
        url: `/customer/editCustomer/${id}`,
        method: "PATCH",
        body: customerData,
      }),
      invalidatesTags: ['customer']
    }),
  })
})
export const {
  useGetCustomerTransactionQuery,
  useGetSingleCustomerQuery,
  useCreateCustomerMutation,
  useCustomerDeleteMutation,
  useCustomerEditMutation,
  useGetCustomerQuery
} = CustomerApiSlice;
export default CustomerApiSlice;