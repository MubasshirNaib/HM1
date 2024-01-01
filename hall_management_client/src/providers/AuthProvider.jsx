/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { app } from './../config/firebase.config';

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const gooleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      const loggedUser = currentUser?.email || user?.email;
      const userEmail = { email: loggedUser };
      console.log('logged user--', userEmail);
      if (currentUser) {
        axios
          .post('/jwt', userEmail)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios.post('/logout', loggedUser).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => unSubs();
  }, [axios, user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    gooleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
