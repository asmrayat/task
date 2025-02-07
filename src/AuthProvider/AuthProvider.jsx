import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logout =()=>{
    setUser(null)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      if(currentUser){
        setUser(currentUser)
        console.log(currentUser);
        setLoading(false);
      }else{
        setLoading(false);
      }
    })
    return ()=>{
      return unsubscribe();
    }
  },[])

  const authInfo = {
    user, 
    googleLogin,
    createUser,
    signIn,
    logout,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
};
export default AuthProvider;