import { useState, useEffect } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/users/current");s
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    const logout = async () => {
        try {
            await fetch("/api/users/logout", { method: "POST" }); 
            setUser(null);
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    };

    return { user, isLoading, logout }; 
};

export default useAuth;
