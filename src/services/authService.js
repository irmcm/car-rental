import api from "./api";

export const login = async (email, password) => {
    try {
        const response = await api.post("/users/login", { email, password });
        return response.data; 
    } catch (error) {
        console.error("Login failed:", error);
        throw error.response?.data || "Login error";
    }
};

export const register = async (email, password, country, city, photo) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("country", country);
        formData.append("city", city);
        if (photo) {
            formData.append("photo", photo); 
        }

        const response = await api.post("/users/register", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response.data; 
    } catch (error) {
        console.error("Registration failed:", error);
        throw error.response?.data || "Registration error";
    }
};

// Kullanýcý çýkýþ iþlemi
export const logout = async () => {
    try {
        await api.post("/users/logout");
    } catch (error) {
        console.error("Logout failed:", error);
        throw error;
    }
};
