import { useGetTransactionQuery } from '../../Service/Dashbord/DashbordSlice'
import Dashboard from './Dashboard'



const DashbordWrapper = () => {
    const token=localStorage.getItem("auth")
    const {data} = useGetTransactionQuery({token,time})
  return (
    <div>
        <Dashboard/>
    </div>
  )
}

export default DashbordWrapper