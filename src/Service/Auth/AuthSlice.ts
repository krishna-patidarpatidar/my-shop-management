import shopApiSlice from "../Service";



const AuthApi = shopApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
    register: builder.mutation({
        query: (userData:any) => ({
          url: "/user/register",
          method: "POST",
          body: userData
        }),
        
      }),
      login: builder.mutation({
        query: (userData:any) => ({
          url: `/user/login`,
          method: "POST",
          body: userData
        })
      }),
    })
})
export const {useLoginMutation,useRegisterMutation}=AuthApi
export default AuthApi;