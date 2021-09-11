import './App.css';
import HeaderMain from './components/HeaderMain';
import HeaderTop from './components/HeaderTop';
import Product from './features/Product';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <HeaderTop />
            <BrowserRouter>
                <HeaderMain />
            </BrowserRouter>
            <Product />
        </div>
    );
}

export default App;
