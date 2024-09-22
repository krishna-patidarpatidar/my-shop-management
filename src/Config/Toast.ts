import { toast } from 'react-toastify';

// Define a Toast utility object
const Toast = {
  successMsg: (msg: string) => {
    toast.success(msg);
  },
  
  errorMsg: (msg: string) => {
    toast.error(msg);
  },
};

export default Toast;
