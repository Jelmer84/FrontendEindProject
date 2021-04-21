import React from "react";

function InputForm({type,name,placeholder, fieldRef, errors}) {

    return (
        <>
            <label htmlFor={name}>
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...fieldRef}
                />
            </label>
            {errors[name] && <p>⚠️{errors[name].message}</p>}
        </>
    )
}

export default InputForm


