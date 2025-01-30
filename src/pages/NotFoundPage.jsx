import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold mt-2">Sayfa Bulunamadý</h2>
            <p className="text-gray-600 mt-2">Üzgünüz, aradýðýnýz sayfa mevcut deðil.</p>
            <Button text="Ana Sayfaya Dön" onClick={() => navigate("/")} className="mt-4" />
        </div>
    );
};

export default NotFoundPage;
