import React, {useState} from "react";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import Button from "../../components/Button/Button";
import styles from "./StudentCoins.module.css"
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";
import axios from "axios";
import countCratesPerFridge from "../../helpers/fakeData/countStudentsPerFridge/countCratesPerFridge.json";

function StudentCoins() {
    const [accepted, setAccepted] = useState(false)
    const [notAccepted, setNotAccepted] = useState(true)
    const [data, setData] = useState([])

    async function onFormSubmit(event) {
        event.preventDefault()
        try {
            const result = await axios.get(`basisUrl/coins/eventName`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            setData(result)
        } catch (e) {
            console.error(e)
        }
        setAccepted(true)
    }


    return (
        <>
            {!accepted && <div className={styles["coins-container"]}>
                <div>
                    <p><strong>Weekdag:</strong> {countCratesPerFridge.weekday}</p>
                    <p><strong>Evenement:</strong> {countCratesPerFridge.event}</p>
                    <p><strong>StudentenPartij:</strong> {countCratesPerFridge.studentParty}</p>
                </div>

                <form onSubmit={onFormSubmit}>
                    <CoinsComponent
                        disabled={true}
                    />


                    <div className={styles["container-studentCoinsButtons"]}>
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
                    </div>

                </form>
            </div>}
            {accepted && <p>De telling is opgeslagen!</p>}

        </>
    )
}

export default StudentCoins