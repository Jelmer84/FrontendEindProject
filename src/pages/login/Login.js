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
            data['username'] = data.email
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
                    placeholder="Username"
                    fieldRef={register('email', {
                            required: {
                                value: true,
                                message: "Username is vereist"
                            }
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
                         <p>Voorbeeld1!</p>
                <Button
                    type="submit"
                    name="Inloggen"
                />
            </form>
        </>
    );
}

export default Login
