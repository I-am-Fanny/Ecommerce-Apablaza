import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';


function App() {
   return(
     <BrowserRouter>
     <NavBar/>
     
     <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:idCat' element={<ItemListContainer/>}/>    
       <Route path= '/item/ :idItem'  element={<ItemDetailContainer/>}/>
       <Route path='/cart' element={ <Cart/> } />
     </Routes>
     
     </BrowserRouter>
  
   )
}



export default App;
