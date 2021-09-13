import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <p className={classes.logo}> Go For Movies </p>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink to='/movies'>Movies List </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-movies'>Add Movies </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}


export default Navigation;