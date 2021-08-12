import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import styles from "./Login.module.css"
import {AuthContext} from "../../context/AuthContext";
import InputForm from "../../components/InputForm/InputForm";
import {loginUser} from "../../network/network";
import Button from "../../components/Button/Button";

function Login() {
    const {login} = useContext(AuthContext)
    const {handleSubmit, formState: {errors}, register} = useForm()

    async function onSubmit(data) {
        try {
            const result = await loginUser(data)
            login(result.data.accessToken)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <form className={styles["login-form"]} onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    type="text"
                    name="email"
                    placeholder="E-mail adres"
                    fieldRef={register('email', {
                            required: {
                                value: true,
                                message: "E-mail is vereist"
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Vul een correct E-mail adres in"
                            },
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="password"
                    name="password"
                    placeholder="Wachtwoord"
                    fieldRef={register('password', {
                            required: {
                                value: true,
                                message: "Een wachtwoord is vereist"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,
                                message: "Een wachtwoord moet bestaan uit tenminste 8 karakters, bestaand uit 6 letters, 1 kleine letter, 1 grote letter, 1 nummer en een speciaal karakter"
                            },
                        }
                    )}
                    errors={errors}
                />

                <p>Test123!</p>
                <p>Superadmin123!</p>

                <Button
                    type="submit"
                    name="Inloggen"
                />
            </form>
        </>
    );
}

export default Login
