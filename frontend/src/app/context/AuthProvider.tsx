"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { redirect } from "next/navigation";

import { LoginData, User } from "@/Interfaces/auth";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import { serviceGetUser, serviceLogin } from "@/services/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  const login = useCallback(async (formData: LoginData) => {
    const [loginData, userData] = await Promise.all([
      serviceLogin(formData),
      serviceGetUser(),
    ]);
    if (loginData.success && userData.success) {
      setLoggedIn(true);
      setUser(userData.data);
      setMessage("Logged in successfully");

      redirect("/");
    } else {
      setMessage(loginData.message);
    }
  }, []);

  const contextMenu = useMemo(() => {
    return {
      loggedIn,
      user,
      login,
      message,
    };
  }, [loggedIn, user, message, login]);

  return (
    <ThemeProvider>
      <AuthContext.Provider value={contextMenu}>
        <Navbar />
        {children}
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
