import React from "react";

export default function Header({ title, subtitle }) {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
            <p className="text-center mb-6">{subtitle}</p>
        </div>
    );
}
