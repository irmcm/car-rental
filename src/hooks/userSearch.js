import { useState } from "react";

const useSearch = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 

    const searchOffices = async (query) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/offices/search?query=${query}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data);
            } else {
                setResults([]);
                console.error("Failed to fetch offices");
            }
        } catch (error) {
            console.error("Search error:", error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    return { results, isLoading, searchOffices }; 

export default useSearch;
