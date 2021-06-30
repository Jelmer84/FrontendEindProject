import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import GeneralLogo from "../../assets/thumbnail_algemeen-logo2021.jpg"
import styles from "./Navbar.module.css"
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const {logout, user} = useContext(AuthContext)
    return (

        <nav>
            <div className={styles["nav-container"]}>


                <ul className={styles["nav-list"]}>
                    <li className={styles["nav-item"]}><img src={GeneralLogo} alt="INKOM"/></li>

                    <li className={styles["nav-item"]}>
                        <NavLink to="/" exact activeClassName={styles["active-link"]}>Home</NavLink>
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/profile" activeClassName={styles["active-link"]}>Profiel</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/administration" activeClassName={styles["active-link"]}>Admin</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user &&
                        <NavLink to="/before-count" activeClassName={styles["active-link"]}>Voortelling</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/after-count" activeClassName={styles["active-link"]}>Natelling</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/coins" activeClassName={styles["active-link"]}>Munten</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/my-counts" activeClassName={styles["active-link"]}>Mijn Tellingen</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/student-before-count" activeClassName={styles["active-link"]}>Voortelling
                            S.P.</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/student-after-count" activeClassName={styles["active-link"]}>Natelling S.P.</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user &&
                        <NavLink to="/student-coins" activeClassName={styles["active-link"]}>Munten S.P.</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <NavLink to="/totals" activeClassName={styles["active-link"]}>Totalen</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {!user && <NavLink to="/register" activeClassName={styles["active-link"]}>Registeren</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {!user && <NavLink to="/login" activeClassName={styles["active-link"]}>Inloggen</NavLink>}
                    </li>

                    <li className={styles["nav-item"]}>
                        {user && <Link to="/login" onClick={logout}>Uitloggen</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

