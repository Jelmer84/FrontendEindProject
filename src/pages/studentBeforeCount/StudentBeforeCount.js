import React, {useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import Button from "../../components/Button/Button";
import axios from "axios";

function StudentBeforeCount() {
    const [accepted, setAccepted] = useState(false)
    const [notAccepted, setNotAccepted] = useState(true)

    async function onFormSubmit(event) {
        event.preventDefault()
        try {
            const result = await axios.get(`basisUrl/beforeCounts/eventName`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            // set een state met result want dat zijn al je waardes
        } catch (e) {
            console.error(e)
        }
        setAccepted(true)
    }


    return (
        <>
            {!accepted && <form onSubmit={onFormSubmit}>

                <StudentCountTable
                    nameList="Voor"
                />
                {/*//@Todo, deze knop moet met een onClick, de data van de voortelling weer beschikbaar maken voor de ORGANISATIE. terug naar BeforeCount.*/}

                <Button
                    name="Niet akkoord"
                    type="button"
                    id="notAccepted"
                    value="false"
                />

                <Button
                    name="Akkoord"
                    type="submit"
                    id="accepted"
                />
            </form>}
            {accepted && <p>De telling is opgeslagen!</p>}

        </>
    )
}

export default StudentBeforeCount


