import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../../firebase-config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    // alert(`${errorCode} : ${errorMessage}`);
  };

  const cleanError = () => {
    setError(null);
  };

  const register = async (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      handleError(error);
    });
  };

  const login = async (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      handleError(error);
    });
  };

  const logout = () => {
    setLoading(true);
    signOut(auth).catch((error) => {
      handleError(error);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        login,
        register,
        logout,
        cleanError,
      }}
    >
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
