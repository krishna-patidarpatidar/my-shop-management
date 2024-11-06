import { useGetAllTransactionQuery } from '../../../Service/Transaction/TransactionApiSlice'
import TransactionsListForm from './TransactionsListForm'



const TracsactionsListWrapper = () => {
  
  const { data: Transactions } = useGetAllTransactionQuery('')
  return (
    <div><TransactionsListForm Transactions={Transactions} /></div>
  )
}

export default TracsactionsListWrapper