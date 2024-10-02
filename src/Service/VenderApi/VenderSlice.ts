import shopApiSlice from "../Service";



const VenderApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
        createVender: builder.mutation({
            query: ({ venderData, token }:any) => ({
              url: `/vendors/createVendor`,
              method: "POST",
              body: venderData,
              headers: { "x-access-token": token }
            }),
            invalidatesTags: ['vender']
          }),
          venderDelete: builder.mutation({
            query: ({ token, id }:any) => ({
              url: `/vendors/deleteVendor/${id}`,
              method: "DELETE",
              headers: { "x-access-token": token },
      
            }),
            invalidatesTags: ['vender']
          }),
          getVender: builder.query({
            query: ({ token }:any)  => ({
              url: `/vendors/getAllVendors`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['vender']
          }),
          getSingleVender: builder.query({
            query: ({ token ,id}:any)  => ({
              url: `/vendors/getSingleVendor/${id}`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['vender']
          }),
          venderEdit: builder.mutation({
            query: ({ venderData,token, id }:any) => ({
              url: `/vendors/editVendor/${id}`,
              method: "PATCH",
              body: venderData,
              headers: { "x-access-token": token },
            }),
            invalidatesTags: ['vender']
          }),
    })
})
export const {
 useCreateVenderMutation,
 useVenderDeleteMutation,
 useGetVenderQuery,
 useGetSingleVenderQuery,
 useVenderEditMutation,
}=VenderApiSlice;
export default VenderApiSlice;