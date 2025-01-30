import React, { createContext, useState, useContext, useEffect } from "react";
import { login, logout } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    const handleLogin = async (email, password) => {
        const userData = await login(email, password);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); 
    };

    const handleLogout = async () => {
        await logout();
        setUser(null);
        localStorage.removeItem("user"); 
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
