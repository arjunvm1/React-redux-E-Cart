import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Header from './components/Header';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/wishlist'  element={<Wishlist/>}/>
    <Route path='/cart'  element={<Cart/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
