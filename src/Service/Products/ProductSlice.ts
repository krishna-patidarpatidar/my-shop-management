import shopApiSlice from "../Service";



const ProductSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
addProducts: builder.mutation({
    query: ({ productData,token}) => ({
      url: `/product/addProducts`,
      method: "POST",
      body: productData,
      headers: { "x-access-token": token },
    }),
    invalidatesTags: ['products']
  }),
  getProducts: builder.query({
    query: ({token}) => ({
      url: `/product/getProducts`,
      method: "GET",
      headers: { "x-access-token": token },
    }),
    invalidatesTags: ['products']
  }),
})
})
const {
useAddProductsMutation,
useGetProductsQuery
}=ProductSlice
export default ProductSlice