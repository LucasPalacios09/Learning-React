import React, { useState } from 'react';
import NavItem from './NavItem';
import "../components/styles.css"

const themeInitialState = {
    theme: "nav-bar-light-theme",
    tittle: "Claro"
}

export default function NavBar() {

    const [Theme, setTheme] = useState(themeInitialState);

    const ToogleTheme = () => {
        if (Theme.tittle === "Claro") setTheme({
            tittle: "Oscuro",
            theme: "nav-bar-dark-theme"
        }); else setTheme({
            tittle: "Claro",
            theme: "nav-bar-light-theme"
        })
    };

    return (
        <div className={Theme.theme}>
            <NavItem clickHandler={ToogleTheme} tittle={Theme.tittle} />
            <NavItem clickHandler={ToogleTheme} tittle={Theme.tittle} />
            <NavItem clickHandler={ToogleTheme} tittle={Theme.tittle} />
        </div>);
}
