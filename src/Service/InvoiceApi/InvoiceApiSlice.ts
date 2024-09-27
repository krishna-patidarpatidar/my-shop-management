
import shopApiSlice from "../Service";



const InviceApiSlice = shopApiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        createInvoice: builder.mutation({
            query: ({ billData, token }:any) => ({
                url: `/bill/createBill`,
                method: "POST",
                body: billData,
                headers: { "x-access-token": token },
            }),
            invalidatesTags: ['invoice']
        }),
        getAllInvoice: builder.query({
            query: ({ token }:any) => ({
                url: `/bill/getBills`,
                method: "GET",
                headers: { "x-access-token": token },
            }),
            providesTags: ['invoice']

        }),
        getCustomerInvoice: builder.query({
            query: ({ token, id }:any) => ({
                url: `/bill/getCustomerBill/${id}`,
                method: "GET",
                headers: { "x-access-token": token },
            }),
            providesTags: ['invoice']
            
        }),
        deleteInvoice: builder.mutation({
            query: ({ token, INVNo }:any) => ({
                url: `/bill/deleteBills/${INVNo}`,
                method: "DELETE",
                headers: { "x-access-token": token },
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