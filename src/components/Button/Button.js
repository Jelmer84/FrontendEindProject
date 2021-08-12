import React from "react";
import styles from "./Button.module.css";

function Button({name, type, id, click, value, disabled}) {

    return (
            <button
                disabled={disabled}
                className={styles.button}
                type={type}
                id={id}
                onClick={click}
                value={value}
            >
                {name}
            </button>
    );
}

export default Button