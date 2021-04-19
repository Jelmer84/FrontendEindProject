import React, {useContext} from "react";
import {Link, NavLink} from 'react-router-dom';
import GeneralLogo from "../../assets/thumbnail_algemeen-logo2021.jpg"
import styles from "./Navbar.module.css"
import {AuthContext} from "../../context/AuthContext";


function Navbar() {
        const {logout}=useContext(AuthContext)
    return (
        <nav>
            <div className={styles["nav-container"]}>
                <img src={GeneralLogo} alt="INKOM"/>


                {/*class kaas word styles.kaas*/}
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName={styles["active-link"]}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile" activeClassName={styles["active-link"]}>Profiel</NavLink>
                    </li>

                    <li>
                        <NavLink to="/register" activeClassName={styles["active-link"]}>Registeren</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName={styles["active-link"]}>Inloggen</NavLink>
                    </li>

                    <li>
                        <Link to="/" onClick={logout} >Uitloggen</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

// Heeft u al een account? Klik <Link to="/sign-in">hier</Link> om in te loggen.