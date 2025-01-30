import api from "./api";

export const getAllCars = async () => {
    try {
        const response = await api.get("/cars");
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch cars:", error);
        throw error.response?.data || "Fetch cars error";
    }
};

export const searchCars = async (query) => {
    try {
        const response = await api.get(`/cars/search?query=${query}`);
        return response.data; 
    } catch (error) {
        console.error("Search failed:", error);
        throw error.response?.data || "Search cars error";
    }
};

export const filterCars = async (filters) => {
    try {
        const response = await api.post("/cars/filter", filters);
        return response.data; 
    } catch (error) {
        console.error("Filter failed:", error);
        throw error.response?.data || "Filter cars error";
    }
};
