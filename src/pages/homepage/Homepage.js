import React from "react";
import styles from "./Homepage.module.css"

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3>Beste Samenwerkingspartner!</h3>

                <p>Welkom bij de nieuwe INKOMapp. </p>
            </div>
        </div>
    );
}

export default HomePage


