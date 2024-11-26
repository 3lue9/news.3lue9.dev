// src/components/Menu/HamburgerMenu.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './HamburgerMenu.css';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu if Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            {/* Hamburger Button */}
            <div
                className={`hamburger-menu-button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Side Menu */}
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/About" onClick={() => setIsOpen(false)}>About Us</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
