import React, {useState, useRef} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import InputForm from "../../components/InputForm/InputForm";
import {Link} from "react-router-dom";
import styles from "./Register.module.css"

function Register() {
    const [loading, toggleLoading] = useState(false)
    const [registerSuccess, toggleRegisterSuccess] = useState(false)
    const history = useHistory();
    const {handleSubmit, formState: {errors}, register, watch} = useForm()
    const password = useRef()
    password.current = watch("password", "");


    async function onSubmit(data) {
        console.log(data);
        toggleLoading(true)
        try {
            const result = await axios.post('http://localhost:3000/register', data);
            console.log(result.data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleRegisterSuccess(true)
        history.push("/login")

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    type="tex"
                    name="firstname"
                    placeholder="Voornaam"
                    fieldRef={register("firstname",
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
                    type="tex"
                    name="lastname"
                    placeholder="Achternaam"
                    fieldRef={register("lastname",
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
            <p className={styles.link}> Heeft u al een account? Klik<Link className={styles.sendToLogin} to="/login">hier </Link>om in te loggen.</p>

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