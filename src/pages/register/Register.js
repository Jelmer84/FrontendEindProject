import React, {useState, useRef} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom"
import InputForm from "../../components/InputForm/InputForm";
import styles from "./Register.module.css"
import {registerUser} from "../../network/network";
import Button from "../../components/Button/Button";

function Register() {
    const [loading, toggleLoading] = useState(false)
    const [registerSuccess, toggleRegisterSuccess] = useState(false)
    const [role, setRole] = useState([])
    const [studentID, setStudentID] = useState()
    const history = useHistory();
    const {handleSubmit, formState: {errors}, register, watch} = useForm()
    const password = useRef()
    password.current = watch("password", "");

    async function onSubmit(data) {
        toggleLoading(true)
        data['role'] = role;
        data['studentID'] = studentID;
        try {
            const result = await registerUser(data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleRegisterSuccess(true)
        history.push("/login")
    }

    return (
        <>
            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    type="text"
                    name="firstName"
                    placeholder="Voornaam"
                    fieldRef={register("firstName",
                        {
                            required: {
                                value: true,
                                message: "Voornaam is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="lastName"
                    placeholder="Achternaam"
                    fieldRef={register("lastName",
                        {
                            required: {
                                value: true,
                                message: "Achternaam is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

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
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Vul een correct E-mail adres in"
                            },
                        }
                    )}
                    errors={errors}
                />

                <div className={styles["dropdown-containerRole"]}>
                    <select
                        name="roles"
                        id="roles"
                        defaultValue={"Rol"}
                        onChange={(event => {
                            const selectedRol = event.target.value
                            setRole([selectedRol])
                        })}
                    >
                        <option value="Rol" disabled hidden>Rol</option>
                        <option value="user">Studentpartij</option>
                        <option value="mod">INKOM organisatie</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className={styles["dropdown-containerRole"]}>
                    <select
                        name="studentID"
                        id="studentID"
                        defaultValue={"Studenten Partij"}
                        onChange={(event => {
                            const selectedStudentID = event.target.value
                            setStudentID(selectedStudentID)
                        })}
                    >
                        <option value="Studenten Partij" disabled hidden>Studenten Partij</option>
                        <option value="INKOM">INKOM</option>
                        <option value="S.V. Circumflex">S.V. Circumflex</option>
                        <option value="S.V. Koko">S.V. Koko</option>
                        <option value="M.S.V. Tragos">M.S.V. Tragos</option>
                        <option value="M.S.R.V. Saurus">M.S.R.V. Saurus</option>
                        <option value="Stichting Onafhankelijk Maastricht">Stichting Onafhankelijk Maastricht</option>
                    </select>
                </div>

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

                <InputForm
                    type="password"
                    name="repeatpassword"
                    placeholder="Herhaal Wachtwoord"
                    fieldRef={register('repeatpassword', {
                            validate: value =>
                                value === password.current || "Het herhaal wachtwoord is niet gelijk aan wachtwoord"
                        }
                    )}
                    errors={errors}
                />

                <Button
                    type="submit"
                    name="Registeren"
                />
                {registerSuccess === true &&
                <p>Registeren is gelukt, je wordt nu door gestuurd naar de inlog pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}

            </form>
        </>
    );
}

export default Register

