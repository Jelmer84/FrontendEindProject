import React, {useState} from "react";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import Button from "../../components/Button/Button";
import axios from "axios";
import styles from "./Coins.module.css";
import DropdownWeekdayEvent from "../../components/dropdowncount/dropdownWeekday-Event/DropdownWeekday-Event";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";

function Coins() {
    const [formSubmitSucces, setFormSubmitSucces] = useState(false)

    const [coins, setCoins] = useState(0)

    const [selectedWeekday, setSelectedWeekday] = useState('');
    const [selectedInkomEvent, setSelectedInkomEvent] = useState('');
    const [selectedStudentParty, setSelectedStudentParty] = useState('');

    async function onFormSubmit(event) {
        event.preventDefault()
        try {
            const result = await axios.post('urltjeAfter!!', {
                coins,
                selectedWeekday,
                selectedInkomEvent,
                selectedStudentParty
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
        } catch (e) {
            console.error(e);
        }
        setFormSubmitSucces(true);
    }

    console.log(coins,
        selectedWeekday,
        selectedInkomEvent,
        selectedStudentParty)

    return (
        <>
            {!formSubmitSucces && <div className={styles["coins-container"]}>
                <div>
                    <DropdownWeekdayEvent
                        selectedWeekday={selectedWeekday => setSelectedWeekday(selectedWeekday)}
                        selectedInkomEvent={selectedInkomEvent => setSelectedInkomEvent(selectedInkomEvent)}
                    />
                    <DropdownStudentParty
                        selectedStudentParty={selectedStudentParty => setSelectedStudentParty(selectedStudentParty)}
                    />
                </div>

                <form className={styles["coins-form"]} onSubmit={onFormSubmit}>

                    <CoinsComponent
                        disabled={false}
                        coins={coins}
                        setCoins={setCoins}

                    />

                    <Button
                        name="Opslaan"
                        type="submit"
                        id="buttonSubmit"
                        disabled={!selectedWeekday || !selectedInkomEvent || !selectedStudentParty}
                    />
                    {(!selectedWeekday || !selectedInkomEvent || !selectedStudentParty) &&
                    <p>Vul de datum, het evenement en de studentenpartij in!</p>}

                </form>

            </div>}
            {formSubmitSucces && <p>De telling is opgeslagen!</p>}

        </>
    )
}

export default Coins