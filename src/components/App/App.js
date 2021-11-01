import Header from '../Markup/Header/Header';
import Footer from '../Markup/Footer/Footer';
import Routes from '../Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <ToastContainer />
    </>
  );
}
