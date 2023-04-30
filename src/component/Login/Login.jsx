import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [show , setShow ] = useState(false);
    const [error , setError ] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email , password )
        .then(result =>{
             const loggedUser = result.user;
             navigate(from , {replace : true} )
             console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
        form.reset();

    }

    return (
        <div className='form-container'>
               <h2 className='form-title'>Login</h2>
               <form onSubmit={handleLogin}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="You're Email"  required/>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name="password" id="password" placeholder="password"  required/>
                        <div className=''><p onClick={()=> setShow(!show)}><small>
                              {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                              }
                            </small></p></div>
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
               </form>
               <p className="small-link"><small>New to Ema-john ? <Link to='/signup'>Create New Account</Link> </small></p>
               <p>{error}</p>
      </div> 
    );
};

export default Login;