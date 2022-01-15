
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './hook/useCart';
import { GlobalStyle } from './styles/global';



function App() {

	return (
		<BrowserRouter>
			<CartProvider>
				<GlobalStyle />
				<Header />
				
				<Routes />
				<ToastContainer autoClose={3000} />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
