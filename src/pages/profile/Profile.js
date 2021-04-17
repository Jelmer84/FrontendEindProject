import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import styles from "../../components/footer/Footer.module.css";

function Profile() {
    const {user} = useContext(AuthContext);
    console.log(user)


    return (
        <>
            <div>


                <h3>Profiel</h3>
                <h3>Welkom {user && user.username}</h3>
                <div className={styles["profile-details"]}>

                    {/************VOORNAAM EN ACHTENAAM MEEGEVEN IN AUTHCONTEXT***********/}
                    <p>Voornaam: {user && user.username}</p>
                    <p>Achternaam: {user && user.username}</p>
                    <p>E-mail adres {user && user.email}</p>
                    <p>Gebruikersnaam {user && user.username}</p>

                    <p>Upload je foto!!!</p>

                </div>
            </div>
        </>
    );
}

export default Profile