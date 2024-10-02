import shopApiSlice from "../Service";



const DashbordSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getTransaction: builder.query({
            query: ({ token, time }: any) => ({
                url: `/bills/total-received/${time}`,
                method: "GET",
                headers: { "x-access-token": token }
            }),
            providesTags: ['dashbord']
        }),
    })
})
export const { useGetTransactionQuery } = DashbordSlice
export default DashbordSlice