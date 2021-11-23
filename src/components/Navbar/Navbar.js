import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import logoGarage from "../../assets/logoGarage.png"
import styles from "./Navbar.module.css"
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const {logout, user} = useContext(AuthContext)

    function hasRole(role) {

        const roles = user.roles
        for (let i = 0; i < roles.length; i++) {
            if (role === roles[i].name) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className={styles["nav-container"]}>
            <nav>
                {user && <ul className={styles["nav-list"]}>
                    <li className={styles["nav-item"]}><img src={logoGarage} alt="Garage logo"/></li>

                    <li className={styles["nav-item"]}>
                        <NavLink to="/" exact activeClassName={styles["active-link"]}>Home</NavLink></li>

                    {/*<li className={styles["nav-item"]}>{user &&*/}
                    {/*<NavLink to="/profile" activeClassName={styles["active-link"]}>Profiel</NavLink>}</li>*/}

                    {hasRole('ROLE_ADMIN') && <li className={styles["nav-item"]}>
                        <NavLink to="/customer" activeClassName={styles["active-link"]}>Klant</NavLink></li>
                    }

                    {hasRole('ROLE_ADMIN') && <li className={styles["nav-item"]}>
                        <NavLink to="/car" activeClassName={styles["active-link"]}>Auto</NavLink></li>
                    }

                    {hasRole('ROLE_MECHANIC') && <li className={styles["nav-item"]}>
                        <NavLink to="/repair" activeClassName={styles["active-link"]}>Reparatie</NavLink></li>
                    }

                    {hasRole('ROLE_REGISTER') && <li className={styles["nav-item"]}>
                        <NavLink to="/payment" activeClassName={styles["active-link"]}>Bon Aanmaken</NavLink></li>
                    }

                    {hasRole('ROLE_BACKOFFICE') && <li className={styles["nav-item"]}>
                        <NavLink to="/item" activeClassName={styles["active-link"]}>Onderdelen</NavLink></li>
                    }

                    {hasRole('ROLE_BACKOFFICE') && <li className={styles["nav-item"]}>
                        <NavLink to="/service" activeClassName={styles["active-link"]}>Handelingen</NavLink></li>
                    }

                    {hasRole('ROLE_BACKOFFICE') && <li className={styles["nav-item"]}>
                        <NavLink to="/register" activeClassName={styles["active-link"]}>Registeren</NavLink></li>
                    }

                    <li className={styles["nav-item"]}>{user && <Link to="/login" onClick={logout}>Uitloggen</Link>}</li>
                </ul>}

                {!user && <ul className={styles["nav-list"]}><li className={styles["nav-item"]}><img src={logoGarage} alt="Garage logo"/></li>

                    <li className={styles["nav-item"]}><NavLink to="/" exact activeClassName={styles["active-link"]}>Home</NavLink></li>

                    <li className={styles["nav-item"]}>{!user && <NavLink to="/login" activeClassName={styles["active-link"]}>Inloggen</NavLink>}</li>
                </ul>}
            </nav>
        </div>
    );
}

export default Navbar

// import React, {useContext} from "react";
// import {Link, NavLink} from "react-router-dom";
// import logoGarage from "../../assets/logoGarage.png"
// import styles from "./Navbar.module.css"
// import {AuthContext} from "../../context/AuthContext";
//
// function Navbar() {
//     const {logout, user} = useContext(AuthContext)
//
//     function hasRole(role) {
//
//         const roles = user.roles
//         for (let i = 0; i < roles.length; i++) {
//             if (role === roles[i].name) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//
//
//     return (
//         <div className={styles["nav-container"]}>
//             <nav>
//                 {user && <ul className={styles["nav-list"]}>
//                     <li className={styles["nav-item"]}><img src={logoGarage} alt="INKOM"/></li>
//
//                     <li className={styles["nav-item"]}>
//                         <NavLink to="/" exact activeClassName={styles["active-link"]}>Home</NavLink></li>
//
//                     <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/profile" activeClassName={styles["active-link"]}>Profiel</NavLink>}</li>
//
//                     {(hasRole('ROLE_MECHANIC') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_MECHANIC')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/before-count" activeClassName={styles["active-link"]}>Voortelling</NavLink>}</li>}
//
//                     {(hasRole('ROLE_MECHANIC') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_MECHANIC')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/after-count" activeClassName={styles["active-link"]}>Natelling</NavLink>}</li>}
//
//                     {(hasRole('ROLE_MECHANIC') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_MECHANIC')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/coins" activeClassName={styles["active-link"]}>Munten</NavLink>}</li>}
//
//                     {(hasRole('ROLE_MECHANIC') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_MECHANIC')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/my-counts" activeClassName={styles["active-link"]}>Mijn Tellingen</NavLink>}</li>}
//
//                     {(hasRole('ROLE_BACKOFFICE') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_BACKOFFICE')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/student-before-count" activeClassName={styles["active-link"]}>Voortelling S.P.</NavLink>}</li>}
//
//                     {(hasRole('ROLE_BACKOFFICE') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_BACKOFFICE')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/student-after-count" activeClassName={styles["active-link"]}>Natelling S.P.</NavLink>}</li>}
//
//                     {(hasRole('ROLE_BACKOFFICE') || (hasRole('ROLE_ADMIN')) && hasRole('ROLE_BACKOFFICE')) && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/student-coins" activeClassName={styles["active-link"]}>Munten S.P.</NavLink>}</li>}
//
//                     {hasRole('ROLE_ADMIN') && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/overall-counts" activeClassName={styles["active-link"]}>Losse tellingen</NavLink>}</li>}
//
//                     {hasRole('ROLE_ADMIN') && <li className={styles["nav-item"]}>{user &&
//                     <NavLink to="/totals" activeClassName={styles["active-link"]}>Totalen</NavLink>}</li>}
//
//                     {hasRole('ROLE_ADMIN') && <li className={styles["nav-item"]}>
//                         <NavLink to="/register" activeClassName={styles["active-link"]}>Registeren</NavLink></li>}
//
//                     <li className={styles["nav-item"]}>{user && <Link to="/login" onClick={logout}>Uitloggen</Link>}</li>
//                 </ul>}
//
//                 {!user && <ul className={styles["nav-list"]}><li className={styles["nav-item"]}><img src={logoGarage} alt="INKOM"/></li>
//
//                     <li className={styles["nav-item"]}><NavLink to="/" exact activeClassName={styles["active-link"]}>Home</NavLink></li>
//
//                     <li className={styles["nav-item"]}>{!user && <NavLink to="/login" activeClassName={styles["active-link"]}>Inloggen</NavLink>}</li>
//                 </ul>}
//             </nav>
//         </div>
//     );
// }
//
// export default Navbar
//
