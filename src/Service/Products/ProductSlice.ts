import shopApiSlice from "../Service";

const ProductSlice = shopApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    addProducts: builder.mutation({
      query: ({ productData, token }:any) => ({
        url: `/product/addProducts`,
        method: "POST",
        body: productData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product'], // Invalidates 'product' tag to auto-update
    }),
    getProducts: builder.query({
      query: ({ token }:any) => ({
        url: `/product/getProducts`,
        method: "GET",
        headers: { "x-access-token": token },
      }),
      providesTags: ['product'], // Provides 'product' tag to trigger re-fetch
    }),
    getSingleProducts: builder.query({
      query: ({ token,id }:any) => ({
        url: `/product/getSingleProduct/${id}`,
        method: "GET",
        headers: { "x-access-token": token },
      }),
      providesTags: ['product'], // Provides 'product' tag to trigger re-fetch
    }),
    editProducts: builder.mutation({
      query: ({ token, id, productData }:any) => ({
        url: `/product/editProduct/${id}`,
        method: "PATCH",
        headers: { "x-access-token": token },
        body: productData,
      }),
      invalidatesTags: ['product'], // Invalidates 'product' tag to auto-update
    }),
  }),
});

export const {
  useGetSingleProductsQuery,
  useAddProductsMutation,
  useEditProductsMutation,
  useGetProductsQuery,
} = ProductSlice;
export default ProductSlice;
