import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/CartContext';



function App() {
   return(

    <CartContextProvider>
       <BrowserRouter>
           <NavBar/>
           <Routes>
               <Route path='/' element={<ItemListContainer/>}/>
               <Route path='/category/:idCat' element={<ItemListContainer/>}/>    
               <Route path= '/item/:itemId'  element={<ItemDetailContainer/>}/>
               <Route path='/cart' element={<Cart/>} />
          </Routes>
     
     </BrowserRouter>
    </CartContextProvider>

     
  
   )
}



export default App;
