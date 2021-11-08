import React from 'react';
import { MenuItems } from './MenuItems/MenuItems';
import './MenuItems/Menuitems.css'
import './Navbar.css'
import NavCart from '../NavCart/NavCart';
import '../NavCart/NavCart.css'



class NavBar extends React.Component {
    state = {clicked:false}
     render(){
         return (
             <>
             <div>
                 <nav className="NavbarItems">
                     <h1 className="navbar-logo">Encestalo<i className="fas fa-basketball-ball"></i></h1>
                    <div className="menu-icon">

                    </div>
                    <ul className="nav-menu">
                        {MenuItems.map((item,index) => {
                           return(
                               <li key={index}>
                                  <a ClassName={item.cName} href={item.url}>
                                      {item.title}
                                  </a>
                               </li>
                           )
                        })}
                        <button className="nav-cart"><NavCart/></button>
                        
                    </ul>
                    
                 </nav>
                 
             </div>
             
             </>
         );
     }
}

export default NavBar;