import CustomerTransactionForm from './CustomerTransactionForm'
import { useGetCustomerTransactionQuery } from '../../../Service/CustomerApi/CustomerSlice'
import { useParams } from 'react-router-dom'



const CustomerTracsactionWrapper = () => {
  const { id } = useParams()
  const { data: customerTransaction } = useGetCustomerTransactionQuery({ id })
  return (
    <div><CustomerTransactionForm customerTransaction={customerTransaction} /></div>
  )
}

export default CustomerTracsactionWrapper