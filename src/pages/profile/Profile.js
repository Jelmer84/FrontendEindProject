import styles from "./Profile.module.css"
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {getImage, uploadImage} from "../../network/network";

function Profile() {
    const {user} = useContext(AuthContext)
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState(false);
    const [imageId, setImageId] = useState(-1);

    useEffect(async () => {
        const res = await getImage(user.id)
        const image = res.data.base64String;
        if (image) {
            setImageId(res.data.id)
            setImagePreview(image)
        }
    }, [])

    async function sendImage(image) {
        try {
            const result = await uploadImage({
                base64String: image,
                userId: user.id,
                id: imageId
            })
            setImageId(result.data.id)
        } catch (e) {
            console.error(e);
        }
    }

    const handleImageChange = (e) => {
        setError(false)
        const selected = e.target.files[0];
        const allowed_types = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && allowed_types.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result);
                sendImage(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    };
    
    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    {error && <p className={styles.error}>Dit type file wordt niet ondersteund </p>}

                    <div className={styles.imagePreview}
                        // Hier gebruik ik een dynamische styling, daarom heb ik een inline style gebruikt
                         style={{background: imagePreview ? `url("${imagePreview}") no-repeat center/cover` : "#cae5d9"}}
                    >
                        {!imagePreview && (
                            <>
                                <p>Voeg een foto toe</p>
                                <button type="button">
                                    <label
                                        htmlFor="fileUpload"
                                        className={styles.custumFileUpload}
                                    >
                                        Kies File
                                    </label>
                                </button>

                                <input
                                    type="file"
                                    id="fileUpload"
                                    onChange={handleImageChange}
                                />
                                <span>(jpg, jpeg or png)</span>
                            </>
                        )}
                    </div>
                    {imagePreview && (
                        <button
                            type="button"
                            onClick={() => setImagePreview(null)}
                        >
                            Delete foto
                        </button>
                    )}
                </div>

                <div>
                    <h2>Gegevens:</h2>
                    <p><strong>Voornaam: </strong>{user && user.firstName}</p>
                    <p><strong>Achternaam: </strong>{user && user.lastname}</p>
                    <p><strong>Email: </strong>{user && user.email}</p>
                </div>
            </div>
        </>
    );
}

export default Profile;