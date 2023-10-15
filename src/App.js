import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDisplay from './components/ProductDisplay';
import ProductDetails from './components/ProductDetails';
import ShopingCart from './components/ShopingCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<ProductDisplay/>}/>
          <Route path='/SaatDetail/:id' element={<ProductDetails/>}/>
        </Routes>
        <ShopingCart/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
