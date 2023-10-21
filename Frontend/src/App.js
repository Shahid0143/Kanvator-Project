
import './App.css';

import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
function App() {

  
  return (
    <div >
      <Navbar/>
     <Routes>
        <Route path="/" element={<ProductList/>}/>
     <Route path="/cart" element={<Cart/>}/>
    
   

     </Routes>
    </div>
  );
}

export default App;
