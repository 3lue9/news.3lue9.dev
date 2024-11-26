import React from "react";
import "./Card.css"; // Import the CSS for styling

// Define the types for the props
interface CardProps {
    title: string;
    image: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
