import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    // Use the useLocation hook from React Router to get the current location (route).
    const location = useLocation();

    return (
        <div className="nav">
            <div className="navbar-nav">
                {/* Create a Link for the "Dictionary" section with a conditional "active" class */}
                <Link
                    to="/dictionary"
                    className={`nav-item ${location.pathname === '/dictionary' ? 'active' : ''}`}
                >
                    {/* Render the FiSearch icon as part of the link */}
                    <FiSearch className="dict-nav-icon" />
                    Dictionary
                </Link>

                {/* Create a Link for the "Reading" section with a conditional "active" class */}
                <Link
                    to="/reading"
                    className={`nav-item ${location.pathname === '/reading' ? 'active' : ''}`}
                >
                    Reading
                </Link>

                {/* Create a Link for the "Vocabulary" section with a conditional "active" class */}
                <Link
                    to="/vocabulary"
                    className={`nav-item ${location.pathname === '/vocabulary' ? 'active' : ''}`}
                >
                    Vocabulary
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
