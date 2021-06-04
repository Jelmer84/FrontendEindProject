import styles from "./Profile.module.css"
import React, { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";

function Profile() {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState(false);

    const handleImageChange = (e) => {
        setError(false)
        const selected = e.target.files[0];
        const allowed_types = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && allowed_types.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    };
    
    return(
        <>
        <div className={styles.background}>
            <div className={styles.container}>
                {error && <p className={styles.error}>Dit type file wordt niet ondersteund </p>}
                <div
                    className={styles.imagePreview}
                    style={{background: imagePreview ? `url("${imagePreview}") no-repeat center/cover` : "#cae5d9"}}

                >
                    {!imagePreview && (
                        <>
                            <p>Voeg een foto toe</p>
                            <button>
                                <label htmlFor="fileUpload" className={styles.custumFileUpload}>
                                    Kies File
                                </label>
                            </button>
                            <input type="file" id="fileUpload" onChange={handleImageChange}/>
                            <span>(jpg, jpeg or png)</span>
                        </>
                    )}
                </div>
                {imagePreview && (
                    <button onClick={() => setImagePreview(null)}>Delete foto</button>
                )}
            </div>

                <div>
                    <h2>Gegevens:</h2>
                    <p><strong>Voornaam: </strong>{user && user.firstname}</p>
                    <p><strong>Achternaam: </strong>{user && user.lastname}</p>
                    <p><strong>Email: </strong>{user && user.email}</p>
                </div>
        </div>
        </>
    );
}

export default Profile;