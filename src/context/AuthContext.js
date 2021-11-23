import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_Decode from "jwt-decode";
import {fetchUser} from "../network/network";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [userState, setUserState] = useState({user: null, status: "pending"});

    async function fetchUserData(JWToken) {
        const decoded = jwt_Decode(JWToken);
        console.log(JWToken)
        const email = decoded.sub;
        try {
            const result = await fetchUser(email)
            console.log(result)
            const data = result.data;
            delete data['password'];
            setUserState({
                user: data,
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
        localStorage.setItem('token', JWToken);
        await fetchUserData(JWToken);
        history.push("/customer");
    }

    function logoutFunction() {
        localStorage.clear();
        setUserState({user: null, status: "done"});
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