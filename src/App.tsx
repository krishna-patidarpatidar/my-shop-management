import { Provider } from "react-redux"
import Route from "./Config/Route"
import store from "./Service/Store"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Provider store={store}> 
      <Route/>
    </Provider>
      <ToastContainer/>
   
  
    </>
  )
}

export default App