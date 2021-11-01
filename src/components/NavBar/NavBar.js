import React from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css'

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
                        {MenuItems.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )

                        })}
                        
                    </ul>
                 </nav>
             </div>
             </>
         );
     }
}

export default NavBar;