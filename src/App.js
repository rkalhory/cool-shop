import './styles/App.scss';
import SiteRouter from './router/SiteRouter'
import Menu from './components/menuBar'
import {QueryClient,QueryClientProvider} from 'react-query'
import Footer from "./components/footer";

const queryClient = new QueryClient()

const App = () => (
      <QueryClientProvider client={queryClient}>
        <Menu/>
        <SiteRouter/>
        <Footer/>
      </QueryClientProvider>
  )


export default App;
