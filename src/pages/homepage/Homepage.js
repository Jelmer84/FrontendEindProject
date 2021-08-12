import React from "react";
import styles from "./Homepage.module.css"

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3>Beste Samenwerkingspartner!</h3>

                <p>Welkom bij de nieuwe INKOMapp. Bedankt dat je dit jaar meewerkt aan een stapje richting de toekomst!
                    Door het testen van deze app hopen we het telsysteem van de INKOM te digitaliseren, zodat het proces
                    voor alle partijen makkelijker en sneller verloopt. Vergeet niet om ook de papieren tellijsten in te
                    vullen, beide lijsten moet volledig ingevuld zijn om te kunnen realiseren én om de voordelen van de
                    app te onderzoeken.
                    Bedankt voor jullie medewerking!
                    Lucie: wellicht dat het handig is dat er op de homepagina meteen een inlog scherm staat voor de
                    verschillende functies, dus dat je daar alleen maar op hoeft te klikken en dan kan inloggen en
                    wellicht wat info over hoe de app werkt.</p>
            </div>
        </div>
    );
}

export default HomePage


