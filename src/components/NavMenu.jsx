//Menu com 4 itens e um botão para alterar o tema
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../challenges/ThemeSupportContextApi/ThemeContext';

function NavMenu() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav>
            <h4 className="logo">My Website</h4>
            <ul id="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
        </nav>
    );
}
export default NavMenu;