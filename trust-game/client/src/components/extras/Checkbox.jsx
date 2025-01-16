import React from "react";

export default function Checkbox({ isChecked, onChange }) {
    return (
        <div className="mt-6 flex items-center">
            <input
                type="checkbox"
                id="consent"
                className="mr-2"
                checked={isChecked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor="consent" className="text-gray-800">
                I accept the above information.
            </label>
        </div>
    );
}
