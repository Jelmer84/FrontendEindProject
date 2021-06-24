import React, {useState} from "react";
import styles from "../../components/CountForm/CountTable.module.css";
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
                {/*//@Todo MOET DEZE KNOP RESET ALS TYPE ZIJN?*/}

                <Button
                    name="Niet akkoord"
                    type="button"
                    id="notAccepted"
                />

                <Button
                    name="Akkoord"
                    type="submit"
                    id="notAccepted"
                />
            </form>}
        </>
    )
}

export default StudentBeforeCount


