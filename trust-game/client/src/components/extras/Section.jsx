import React from "react";

export default function Section({ title, children }) {
    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{children}</p>
        </div>
    );
}
