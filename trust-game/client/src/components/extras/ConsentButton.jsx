import React from "react";

export default function ConsentButton({ isChecked, onClick }) {
    return (
        <button
            className={`mt-4 px-6 py-2 rounded-lg ${isChecked ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"
                }`}
            disabled={!isChecked}
            onClick={onClick}
        >
            I Consent
        </button>
    );
}
