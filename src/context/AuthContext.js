import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_Decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [userState, setUserState] = useState({user: null, status: "pending"});

    async function fetchUserData(JWToken) {
        const decoded = jwt_Decode(JWToken);
        const userId = decoded.sub;
        try {
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${JWToken}`,
                    },
                }
            );
            // console.log(result)
            setUserState({
                user: {
                    firstname: result.data.firstname,
                    lastname: result.data.lastname,
                    email: result.data.email,
                    id: result.data.id,
                    // accesLevels: result.data.roles,
                    token: JWToken
                },
                status: "done",
            });
        } catch (e) {
            console.error(e)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        let mounted = true;
        const token = localStorage.getItem('token')
        if (token !== null && userState.user === null) {
            if (mounted) {
                fetchUserData(token);
            }
        } else {
            setUserState({
                user: null,
                status: "done"
            });
        }
        return () => (mounted = false);
    }, []);

    async function loginFunction(JWToken) {
        // console.log(JWToken)
        // console.log("DECODED", decoded)
        localStorage.setItem('token', JWToken);

        await fetchUserData(JWToken);
        history.push("/profile");
    }

    function logoutFunction() {
        console.log("LOGOUT")
        localStorage.clear();
        setUserState({user: null, status: "done"});
        // history.push("/")
    }

    const data = {
        ...userState,
        login: loginFunction,
        logout: logoutFunction,
        isLoading
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;