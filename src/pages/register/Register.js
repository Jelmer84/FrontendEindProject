import React, {useState, useRef} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom"
import axios from "axios";
import InputForm from "../../components/InputForm/InputForm";
// import {Link} from "react-router-dom";
import styles from "./Register.module.css"
import {registerUser} from "../../network/network";

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
        //console.log(data);
        //setRole(role)
       // console.log(role)
        toggleLoading(true)
        data['role'] = role;
        data['studentID'] = studentID;
        console.log(data)
        try {
            const result = await registerUser(data)
            //await axios.post('http://localhost:8080/api/auth/signup', data);
            console.log(result.data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleRegisterSuccess(true)
        history.push("/login")

    }

    // console.log(role)

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

                {/*<label htmlFor="firstname">*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="firstname"*/}
                {/*        id="firstname"*/}
                {/*        placeholder="Voornaam"*/}
                {/*        {...register('firstname', {*/}
                {/*                required: {*/}
                {/*                    value: true,*/}
                {/*                    message: "Voornaam is verplicht",*/}
                {/*                }*/}
                {/*            }*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*{errors.firstname && <p>⚠️{errors.firstname.message}</p>}*/}


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

                {/*<label htmlFor="lastname">*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="lastname"*/}
                {/*        id="lastname"*/}
                {/*        placeholder="Achternaam"*/}
                {/*        {...register('lastname', {*/}
                {/*                required: {*/}
                {/*                    value: true,*/}
                {/*                    message: "Achternaam is verplicht"*/}
                {/*                }*/}
                {/*            }*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*{errors.lastname && <p>⚠️{errors.lastname.message}</p>}*/}


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

                {/*<label htmlFor="email">*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="email"*/}
                {/*        id="email"*/}
                {/*        placeholder="E-mail adres"*/}
                {/*        {...register('email', {*/}
                {/*                required: {*/}
                {/*                    value: true,*/}
                {/*                    message: "E-mail is vereist"*/}
                {/*                },*/}
                {/*                pattern: {*/}
                {/*                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,*/}
                {/*                    message: "Vul een correct email adres in"*/}
                {/*                },*/}
                {/*            }*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*{errors.email && <p>⚠️{errors.email.message}</p>}*/}

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
                        //ref={(input)=>{this.input = input}}
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

                {/*<label htmlFor="password">*/}
                {/*    <input*/}
                {/*        type="password"*/}
                {/*        name="password"*/}
                {/*        id="password"*/}
                {/*        placeholder="Wachtwoord"*/}
                {/*        {...register('password', {*/}
                {/*                required: {*/}
                {/*                    value: true,*/}
                {/*                    message: "Een wachtwoord is vereist"*/}
                {/*                },*/}
                {/*                pattern: {*/}
                {/*                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,*/}
                {/*                    message: "Een wachtwoord moet bestaan uit tenminste 8 karakters, bestaand uit 6 letters, 1 kleine letter, 1 grote letter, 1 nummer en een speciaal karakter"*/}
                {/*                },*/}
                {/*            }*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*{errors.password && <p>⚠️{errors.password.message}</p>}*/}


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

                {/*<label htmlFor="repeatpassword">*/}
                {/*    <input*/}
                {/*        type="password"*/}
                {/*        name="repeatpassword"*/}
                {/*        id="repeatpassword"*/}
                {/*        placeholder="Herhaal Wachtwoord"*/}
                {/*        {...register('repeatpassword', {*/}
                {/*                validate: value =>*/}
                {/*                    value === password.current || "Het herhaal wachtwoord is niet gelijk aan wachtwoord"*/}
                {/*            }*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*{errors.repeatpassword && <p>⚠️{errors.repeatpassword.message}</p>}*/}

                <button type="submit">Registeren</button>
                {registerSuccess === true &&
                <p>Registeren is gelukt, je wordt nu door gestuurd naar de inlog pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}

            </form>
        </>
    );
}

export default Register


// X 1. installeer axios
// X 2. importeer axios
// X 3. asynchrone functie
// X 4. try / catch blok
// X --- error state en loading state aanmaken en communiceren aan gebruiker
// X 5. in try: post request maken naar endpoint:  http://localhost:3000/register//
// X 6. axios post request krijgt de url en het data object mee (deze moet in dit geval minimaal email en password bevatten)
// X 7. Succesmelding tonen aan de gebruiker (stukje state voor maken!)