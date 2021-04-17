import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import "./Login.module.css"
import {AuthContext} from "../../context/AuthContext";


// X 1. importeer axios
// X 2. async functie maken
// X 3. try/catch blok
// X 4. in de try: axios post request naar het eindpoint http://localhost:3000/login// --- error state en loading state aanmaken en communiceren aan gebruiker
// X 5. het post request bevat het endpoint en het data object met email en wachtwoord
// X 6. wat we terugkrijgen is JWT token, die moet in de local storage
// X 7. gebruiker doorsturen naar profielpagina
// 8. de gebruikersdata moet in de context geplaatst zodat alle componenten erbij kunnen!


function Login() {
    const {login}=useContext(AuthContext)
    const {handleSubmit, formState: {errors}, register} = useForm()

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:3000/login', data)
            // console.log(result.data.accessToken);
            login(result.data.accessToken)
        } catch (e) {
            console.error(e)
        }                                
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Gebruikers naam"
                        // E-MAIL AANPASSEN NAAR USERNAME
                        {...register('email', {
                                required: {
                                    value: true,
                                    message: "Gebruikers naam is verplicht"
                                }
                            }
                        )}
                    />
                </label>
                {errors.username && <p>⚠️{errors.username.message}</p>}

                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Wachtwoord"
                        {...register('password', {
                                required: {
                                    value: true,
                                    message: "Wachtwoord is verplicht",
                                }
                            }
                        )}
                    />
                </label>
                {errors.password && <p>⚠️{errors.password.message}</p>}

                <button type="submit">Inloggen</button>

            </form>
        </>
    )
}

export default Login

