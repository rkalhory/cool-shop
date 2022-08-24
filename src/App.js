import './styles/App.scss';
import SiteRouter from './router/SiteRouter'
import Menu from './components/menuBar'
import {QueryClient,QueryClientProvider} from 'react-query'
import Footer from "./components/footer";
import {useSelector} from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

const App = () => {

    const cart=useSelector(state => state.cart)

    return(
        <QueryClientProvider client={queryClient}>
            <Menu/>
            <SiteRouter/>
            <Footer/>
            <ToastContainer  rtl={true} />
        </QueryClientProvider>
    )
}

export default App;
