import shopApiSlice from "../Service";

const ProductSlice = shopApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    addProducts: builder.mutation({
      query: ({ productData }:any) => ({
        url: `/product/addProducts`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ['product'], // Invalidates 'product' tag to auto-update
    }),
    getProducts: builder.query({
      query: () => ({
        url: `/product/getProducts`,
        method: "GET",
      }),
      providesTags: ['product'], // Provides 'product' tag to trigger re-fetch
    }),
    getSingleProducts: builder.query({
      query: ({ id }:any) => ({
        url: `/product/getSingleProduct/${id}`,
        method: "GET",
      }),
      providesTags: ['product'], // Provides 'product' tag to trigger re-fetch
    }),
    editProducts: builder.mutation({
      query: ({id, productData }:any) => ({
        url: `/product/editProduct/${id}`,
        method: "PATCH",
        body: productData,
      }),
      invalidatesTags: ['product'], // Invalidates 'product' tag to auto-update
    }),
    deleteProducts: builder.mutation({
      query: ({  id }:any) => ({
        url: `/product/deleteProduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['product'], // Invalidates 'product' tag to auto-update
    }),
  }),
});

export const {
  useDeleteProductsMutation,
  useGetSingleProductsQuery,
  useAddProductsMutation,
  useEditProductsMutation,
  useGetProductsQuery,
} = ProductSlice;
export default ProductSlice;
