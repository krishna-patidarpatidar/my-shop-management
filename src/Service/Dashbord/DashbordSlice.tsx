import shopApiSlice from "../Service";



const DashbordSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getTransaction: builder.query({
            query: ({ token, time }: any) => ({
                url: `/bill/bills/total-received/${time}`,
                method: "GET",
                headers: { "x-access-token": token }
            }),
            providesTags: ['dashbord']
        }),
        getCustomerCounts: builder.query({
            query: ({ token }: any) => ({
                url: `/customer/countCustomers`,
                method: "GET",
                headers: { "x-access-token": token }
            }),
            providesTags: ['dashbord']
        }),
        getBillsCount: builder.query({
            query: ({ token, time }: any) => ({
                url: `/bill/bills/count/${time}`,
                method: "GET",
                headers: { "x-access-token": token }
            }),
            providesTags: ['dashbord']
        }),
        getVendersCount: builder.query({
            query: ({ token }: any) => ({
                url: `/vendors/countVendors`,
                method: "GET",
                headers: { "x-access-token": token }
            }),
            providesTags: ['dashbord']
        }),
    })
})
export const {
    useGetVendersCountQuery,
    useGetTransactionQuery,
    useGetBillsCountQuery,
    useGetCustomerCountsQuery } = DashbordSlice
export default DashbordSlice