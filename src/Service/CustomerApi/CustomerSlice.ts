import shopApiSlice from "../Service";



const CustomerApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
        createCustomer: builder.mutation({
            query: ({ customerData, token }:any) => ({
              url: `/customer/createCustomer`,
              method: "POST",
              body: customerData,
              headers: { "x-access-token": token }
            }),
            invalidatesTags: ['customer']
          }),
          customerDelete: builder.mutation({
            query: ({ token, id }:any) => ({
              url: `/customer/deleteCustomer/${id}`,
              method: "DELETE",
              headers: { "x-access-token": token },
      
            }),
            invalidatesTags: ['customer']
          }),
          getCustomer: builder.query({
            query: ({ token }:any)  => ({
              url: `/customer/getAllCustomer`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['customer']
          }),
          getSingleCustomer: builder.query({
            query: ({ token ,id}:any)  => ({
              url: `/customer/getSingleCustomer/${id}`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['customer']
          }),
          customerEdit: builder.mutation({
            query: ({ customerData,token, id }:any) => ({
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
  useGetSingleCustomerQuery,
    useCreateCustomerMutation,
    useCustomerDeleteMutation,
    useCustomerEditMutation,
    useGetCustomerQuery
}=CustomerApiSlice;
export default CustomerApiSlice;