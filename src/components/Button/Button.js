import React from "react";
import styles from "./Button.module.css";

function Button({name, type, id, click}) {

    return (

            <button
                className={styles.button}
                type={type}
                id={id}
                onClick={click}
            >
                {name}
            </button>


    )
}

export default Button