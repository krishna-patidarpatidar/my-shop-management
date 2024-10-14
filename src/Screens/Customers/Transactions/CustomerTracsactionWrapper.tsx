import React from 'react'
import CustomerTransactionForm from './CustomerTransactionForm'
import { useGetCustomerTransactionQuery } from '../../../Service/CustomerApi/CustomerSlice'
import { useParams } from 'react-router-dom'

type Props = {}

const CustomerTracsactionWrapper = (props: Props) => {
    const {id}=useParams()
    const {data:customerTransaction}=useGetCustomerTransactionQuery({id})
    console.log(customerTransaction)
  return (
    <div><CustomerTransactionForm/></div>
  )
}

export default CustomerTracsactionWrapper