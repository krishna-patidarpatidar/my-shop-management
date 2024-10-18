
import shopApiSlice from "../Service";



const InviceApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        createInvoice: builder.mutation({
            query: ({ billData }: any) => ({
                url: `/bill/createBill`,
                method: "POST",
                body: billData,
            }),
            invalidatesTags: ['invoice']
        }),
        getAllInvoice: builder.query({
            query: () => ({
                url: `/bill/getAllBills`,
                method: "GET",
            }),
            providesTags: ['invoice']
        }),
        getCustomerInvoice: builder.query({
            query: ({ billId }: any) => ({
                url: `/bill/getSingleBill/${billId}`,
                method: "GET",
            }),
            providesTags: ['invoice']
        }),
        deleteInvoice: builder.mutation({
            query: ({ INVNo }: any) => ({
                url: `/bill/deleteBill/${INVNo}`,
                method: "DELETE",
            }),
            invalidatesTags: ['invoice']
        }),
    })
})
export const {
    useCreateInvoiceMutation,
    useDeleteInvoiceMutation,
    useGetAllInvoiceQuery,
    useGetCustomerInvoiceQuery

} = InviceApiSlice
export default InviceApiSlice