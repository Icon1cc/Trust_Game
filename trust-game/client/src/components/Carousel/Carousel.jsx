import React, { useState } from "react";
import "./Carousel.css"; // Custom styles for the carousel

export function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        if (currentIndex < children.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => (
                    <div className="carousel-item" key={index}>
                        {child}
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button className="carousel-button" onClick={goToPrevious} disabled={currentIndex === 0}>
                    Back
                </button>
                <button className="carousel-button" onClick={goToNext} disabled={currentIndex === children.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}
