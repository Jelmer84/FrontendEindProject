import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import styles from "./Login.module.css"
import {AuthContext} from "../../context/AuthContext";
import InputForm from "../../components/InputForm/InputForm";
import {loginUser} from "../../network/network";

function Login() {
    const {login} = useContext(AuthContext)
    const {handleSubmit, formState: {errors}, register} = useForm()

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await loginUser(data) //axios.post('http://localhost:8080/api/auth/signin', data)
            // console.log(result.data.accessToken);
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


                <button type="submit">Inloggen</button>
            </form>
        </>
    );
}

export default Login

// X 1. importeer axios
// X 2. async functie maken
// X 3. try/catch blok
// X 4. in de try: axios post request naar het eindpoint http://localhost:3000/login// --- error state en loading state aanmaken en communiceren aan gebruiker
// X 5. het post request bevat het endpoint en het data object met email en wachtwoord
// X 6. wat we terugkrijgen is JWT token, die moet in de local storage
// X 7. gebruiker doorsturen naar profielpagina
// 8. de gebruikersdata moet in de context geplaatst zodat alle componenten erbij kunnen!


// {/*<label htmlFor="username">*/
// }
// {/*    <input*/
// }
// {/*        type="text"*/
// }
// {/*        name="username"*/
// }
// {/*        id="username"*/
// }
// {/*        placeholder="Gebruikers naam"*/
// }
// {/*        // E-MAIL AANPASSEN NAAR USERNAME*/
// }
// {/*        {...register('email', {*/
// }
// {/*                required: {*/
// }
// {/*                    value: true,*/
// }
// {/*                    message: "Gebruikers naam is verplicht"*/
// }
// {/*                }*/
// }
// {/*            }*/
// }
// {/*        )}*/
// }
// {/*    />*/
// }
// {/*</label>*/
// }
// {/*{errors.username && <p>⚠️{errors.username.message}</p>}*/
// }
//
//
// {/*<label htmlFor="password">*/
// }
// {/*    <input*/
// }
// {/*        type="password"*/
// }
// {/*        name="password"*/
// }
// {/*        id="password"*/
// }
// {/*        placeholder="Wachtwoord"*/
// }
// {/*        {...register('password', {*/
// }
// {/*                required: {*/
// }
// {/*                    value: true,*/
// }
// {/*                    message: "Wachtwoord is verplicht",*/
// }
// {/*                }*/
// }
// {/*            }*/
// }
// {/*        )}*/
// }
// {/*    />*/
// }
// {/*</label>*/
// }
// {/*{errors.password && <p>⚠️{errors.password.message}</p>}*/
// }