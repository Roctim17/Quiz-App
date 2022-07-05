import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header text-center py-5">
            <Link to="/" className="title">
                Thrive Quiz challenge
            </Link>
            <hr className="divider" />
        </div>
    );
};

export default Header;