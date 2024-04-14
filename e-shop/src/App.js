
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/man_banner.jpg'
import Women_banner from './Components/Assets/woman_banner.jpg'
import kids_banner from './Components/Assets/kid_banner.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/Womens' element={<ShopCategory banner={Women_banner} category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory  banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
