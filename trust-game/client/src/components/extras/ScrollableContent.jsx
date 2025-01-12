import React from "react";

export default function ScrollableContent({ children }) {
    return (
        <div className="overflow-y-auto max-h-[70vh] px-6 py-4 border border-gray-300 rounded-md bg-gray-50">
            {children}
        </div>
    );
}
