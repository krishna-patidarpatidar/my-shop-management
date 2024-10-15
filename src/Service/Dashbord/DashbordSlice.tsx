import shopApiSlice from "../Service";



const DashbordSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getTransaction: builder.query({
            query: ({ time }: any) => ({
                url: `/bill/totalReceived/${time}`,
                method: "GET",
            }),
            providesTags: ['dashbord']
        }),
        getCustomerCounts: builder.query({
            query: () => ({
                url: `/customer/countCustomers`,
                method: "GET",
            }),
            providesTags: ['dashbord']
        }),
        getBillsCount: builder.query({
            query: ({ time }: any) => ({
                url: `/bill/totalBillCount/${time}`,
                method: "GET",
            }),
            providesTags: ['dashbord']
        }),
        getVendersCount: builder.query({
            query: () => ({
                url: `/vendors/countVendors`,
                method: "GET",
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