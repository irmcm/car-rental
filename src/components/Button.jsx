import React from "react";

const Button = ({ text, onClick, className, disabled }) => {
    return (
        <button
            className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;