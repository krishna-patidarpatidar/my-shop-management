import shopApiSlice from "../Service";



const TransactionApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({

        getAllTransaction: builder.query({
            query: () => ({
                url: `/transactions/invoicesWithReceivedAmounts`,
                method: "GET",
            }),
            providesTags: ['transaction']
        }),
    })
})
export const {useGetAllTransactionQuery}=TransactionApiSlice;
export default TransactionApiSlice;