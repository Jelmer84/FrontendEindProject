import React from "react";
import styles from "./Homepage.module.css"

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3>Beste Medewerker!</h3>

                <h2>Welkom bij de Garage </h2>

                <table className={styles.table} border="0">
                    <thead>
                    <tr>
                        <th>Openingstijden</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr> Maandag
                        <td>09:00 - 17:00</td>
                    </tr>
                    <tr> Dinsdag
                        <td>09:00 - 17:00</td>
                    </tr>
                    <tr> Woensdag
                        <td>09:00 - 17:00</td>
                    </tr>
                    <tr> Donderdag
                        <td>09:00 - 17:00</td>
                    </tr>
                    <tr> Vrijdag
                        <td>09:00 - 17:00</td>
                    </tr>
                    <tr> Zaterdag
                        <td>Gesloten</td>
                    </tr>
                    <tr> Zondag
                        <td>Gesloten</td>
                    </tr>
                    </tbody>
                </table>

                <div className={styles.text}>
                    <text>Contact: Garagedreef 1</text>
                    <text>telefoon: 030-6351444</text>
                    <text>Postcode: 3991 RR</text>
                    <text>Route:</text>
                    <text>Bij de derde straat linksaf</text>
                </div>
            </div>
        </div>
    );
}

export default HomePage


