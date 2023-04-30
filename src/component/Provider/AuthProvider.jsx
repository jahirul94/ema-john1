import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app) ;
const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null);
    const [loading , setLoading ] = useState(true);


 const loginWithEmailPass = (email , password)=>{
    setLoading(true);
     return createUserWithEmailAndPassword(auth , email , password )
 }

 const signIn =( email , password ) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth , email , password );
 }

  const signOutFromPage =() =>{
      return signOut(auth);
  }

  useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth , (currentUser) =>{
          setUser(currentUser)
          setLoading(false)
      })
      return ()=>{
          return unSubscribe();
      }
  },[])

    const authInfo = {
           user,
           loginWithEmailPass,
           loading,
           signIn,
           signOutFromPage
        
    }


    return (
         <AuthContext.Provider value = {authInfo}>
                  {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;