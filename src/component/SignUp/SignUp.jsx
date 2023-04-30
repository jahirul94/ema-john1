import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
  const {loginWithEmailPass} = useContext(AuthContext);
  const [error , setError ] = useState('');
    const handleSignUp = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      setError('')
      if(password !== confirm){
         setError("Password don't match")
         return
      }
       else if(password.length < 6 ){
          setError ("You're Password must be 6 character or longer")
          return
      }
       
      loginWithEmailPass(email , password)
      .then(result =>{
         const loggedUser = result.user ;
         console.log(loggedUser);
      })
      .catch(error =>{
         console.log(error);
         setError(error.message)
      })
      form.reset()


    }



  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required placeholder="You're Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required placeholder="Password" />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required placeholder="Confirm Password" />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
        <p className="small-link"><small>Already have an account ? <Link to='/login'> Login</Link></small></p>
        <h5 className="text-error">{error}</h5>
    </div>
  );
};

export default SignUp;
