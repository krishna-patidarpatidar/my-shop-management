import shopApiSlice from "../Service";



const CustomerApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
        createCustomer: builder.mutation({
            query: ({ customerData, token }) => ({
              url: `/customer/createCustomer`,
              method: "POST",
              body: customerData,
              headers: { "x-access-token": token }
            }),
            invalidatesTags: ['customer']
          }),
          customerDelete: builder.mutation({
            query: ({ token, id }) => ({
              url: `/customer/deleteCustomer/${id}`,
              method: "DELETE",
              headers: { "x-access-token": token },
      
            }),
            invalidatesTags: ['customer']
          }),
          getCustomer: builder.query({
            query: ({ token }) => ({
              url: `/customer/getAllCustomer`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['customer']
          }),
          customerEdit: builder.mutation({
            query: ({ customerData,token, id }) => ({
              url: `/customer/editCustomer/${id}`,
              method: "PATCH",
              body: customerData,
              headers: { "x-access-token": token },
            }),
            invalidatesTags: ['customer']
          }),
    })
})
export const {
    useCreateCustomerMutation,
    useCustomerDeleteMutation,
    useCustomerEditMutation,
    useGetCustomerQuery
}=CustomerApiSlice;
export default CustomerApiSlice;