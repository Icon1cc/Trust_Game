import React, { useState } from "react";

export default function ProlificIDInput({ next }) {
    const [prolificID, setProlificID] = useState("");

    const isValidID = () => prolificID.trim().length > 0;

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
            {/* Main Container */}
            <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center">Prolific ID</h1>
                <p className="text-center mt-2">Please enter your Prolific ID to proceed.</p>
                <input
                    type="text"
                    value={prolificID}
                    onChange={(e) => setProlificID(e.target.value)}
                    placeholder="Enter your Prolific ID"
                    className="border border-gray-300 rounded px-4 py-2 w-full mt-6"
                />
                <div className="flex justify-center mt-6">
                    <button
                        className={`py-2 px-6 rounded ${isValidID()
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                        onClick={next}
                        disabled={!isValidID()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
