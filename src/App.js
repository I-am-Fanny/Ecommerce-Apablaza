import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
   return(
     <BrowserRouter>
     <NavBar/>
     
     <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:idCat' element={<ItemListContainer/>}/>    
       <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>    
     </Routes>
     </BrowserRouter>
  
   )
}



export default App;
