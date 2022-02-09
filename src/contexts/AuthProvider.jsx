import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleError = (error) => {
    setLoading(false);
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(`${errorCode} : ${errorMessage}`);
    alert(`${errorCode} : ${errorMessage}`);
    // ..
  };

  const register = async (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const login = async (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setCurrentUser(null);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
