import shopApiSlice from "../Service";



const CategoryApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
        createCategory: builder.mutation({
            query: ({ categoryData }:any) => ({
              url: `/category/addCategory`,
              method: "POST",
              body: categoryData,
            }),
            invalidatesTags: ['category']
          }),
          categoryDelete: builder.mutation({
            query: ({ id }:any) => ({
              url: `/category/deleteCategory/${id}`,
              method: "DELETE",
      
            }),
            invalidatesTags: ['category']
          }),
          getCategory: builder.query({
            query: ()  => ({
              url: `/category/getAllCategory`,
              method: "GET",
            }),
            providesTags: ['category']
          }),
          getSingleCategory: builder.query({
            query: ({ id }:any)  => ({
              url: `/category/getSingleCategory/${id}`,
              method: "GET",
            }),
            providesTags: ['category']
          }),
          categoryEdit: builder.mutation({
            query: ({ categoryData, id }:any) => ({
              url: `/category/editCategory/${id}`,
              method: "PATCH",
              body: categoryData,
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