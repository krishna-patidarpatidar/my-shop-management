import shopApiSlice from "../Service";



const CategoryApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
        createCategory: builder.mutation({
            query: ({ categoryData, token }:any) => ({
              url: `/category/addCategory`,
              method: "POST",
              body: categoryData,
              headers: { "x-access-token": token }
            }),
            invalidatesTags: ['category']
          }),
          categoryDelete: builder.mutation({
            query: ({ token, id }:any) => ({
              url: `/category/deleteCategory/${id}`,
              method: "DELETE",
              headers: { "x-access-token": token },
      
            }),
            invalidatesTags: ['category']
          }),
          getCategory: builder.query({
            query: ({ token }:any)  => ({
              url: `/category/getAllCategory`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['category']
          }),
          getSingleCategory: builder.query({
            query: ({ token,id }:any)  => ({
              url: `/category/getSingleCategory/${id}`,
              method: "GET",
              headers: { "x-access-token": token }
            }),
            providesTags: ['category']
          }),
          categoryEdit: builder.mutation({
            query: ({ categoryData,token, id }:any) => ({
              url: `/category/editCategory/${id}`,
              method: "PATCH",
              body: categoryData,
              headers: { "x-access-token": token },
            }),
            invalidatesTags: ['category']
          }),
    })
})
export const {
    useCategoryDeleteMutation,
    useCategoryEditMutation,
    useCreateCategoryMutation,
    useGetSingleCategoryQuery,
    useGetCategoryQuery
}=CategoryApiSlice;
export default CategoryApiSlice;