import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Header = () => {
    const { user , signOutFromPage } = useContext(AuthContext);
    const handleSignOut = ()=>{
        signOutFromPage()
        .then(()=>{})
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>             
                  <img src={logo} alt="" />
               <div>
                 <Link to ="/">Shop</Link>
                 <Link to ="/order">Order</Link>
                 <Link to ="/inventory">Inventory</Link>
                 <Link to ="/login">Login</Link>
                 <Link to ="/signup">Sign up</Link>                
                 {
                    user && <span className='text-white'>{user.email} <button onClick={handleSignOut}>sign Out</button> </span> 
                 }
             </div>
        </nav>
    );
};

export default Header;