import React from "react";
// import {NavLink} from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {


    return (


        <footer className={styles["footer-container"]}>
            <ul className={styles.footer}>
            <li className={styles.copyright}>© by Jelmer Dijxhoorn</li>
            <li>
            {/*<NavLink to="/email" exact activeClassName={styles["active-link"]}>Contact</NavLink>*/}
            </li>
            </ul>
        </footer>

    )
}

export default Footer



// {/*className="kaas" word className ={styles.kaas}  */}
// {styles["active-link"]}