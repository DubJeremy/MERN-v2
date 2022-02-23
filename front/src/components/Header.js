import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => nav.isActive ? "nav-active": ""}>
                        <li>Acceuil</li>
                    </NavLink>
                    <NavLink to="/wishlist" className={(nav) => nav.isActive ? "nav-active": ""}>
                        <li>Liste d'envie</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;