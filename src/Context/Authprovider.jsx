import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
export const Authcontext = createContext();
const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  const createWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const out = () => {
    return signOut(auth);
  };
  const authInfo = {
    createWithEmail,
    user,
    loading,
    setLoading,
    googleUser,
    singEmailPass,
    out,
  };
  return <Authcontext value={authInfo}>{children}</Authcontext>;
};

export default Authprovider;
