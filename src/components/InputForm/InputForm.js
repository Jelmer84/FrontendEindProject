import React from "react";
import styles from "./InputForm.module.css";


function InputForm({type,name,placeholder, fieldRef, errors}) {

    return (
        <>
            <label htmlFor={name}>
                <input
                    className={styles.inputform}
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...fieldRef}
                />
            </label>
            {errors[name] && <p>⚠️{errors[name].message}</p>}
        </>
    );
}

export default InputForm


