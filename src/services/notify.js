import { toast } from 'react-toastify';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message = 'error') =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default notify;
