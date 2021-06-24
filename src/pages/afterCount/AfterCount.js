import React, {useState} from "react";
import styles from "./AfterCount.module.css"
import CountTable from "../../components/CountForm/CountTable";
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";
import Button from "../../components/Button/Button";
import {initialStateDrinks, initialStateKegs, initialStateTanks} from "../../constants/initialStateDrinks";
import axios from "axios";

function AfterCount() {
    const [selectedWeekday, setSelectedWeekday] = useState('');
    const [selectedInkomEvent, setSelectedInkomEvent] = useState('');
    const [selectedStudentParty, setSelectedStudentParty] = useState('');

    const [bottles, setBottles] = useState(initialStateDrinks);
    const [crates, setCrates] = useState(initialStateDrinks);
    const [kegs, setKegs] = useState(initialStateKegs);
    const [tanks, setTanks] = useState(initialStateTanks);

    const [totalCrates, setTotalCrates] = useState(0);
    const [totalBottles, setTotalBottles] = useState(0);
    const [totalKegs, setTotalKegs] = useState(0);
    const [totalTanks, setTotalTanks] = useState(0);

    const [remarks, toggleRemarks] = useState(false);
    const [contentRemarks, setContentRemarks] = useState()

    const [formSubmitSucces, setFormSubmitSucces] = useState(false)


    async function onFormSubmit(event) {
        event.preventDefault()
        try {
            const result = await axios.post('urltjeAfter!!', {
                selectedWeekday,
                selectedInkomEvent,
                selectedStudentParty,
                bottles,
                crates,
                kegs,
                tanks,
                totalCrates,
                totalBottles,
                totalKegs,
                totalTanks,
                contentRemarks
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


    return (
        <>
            {!formSubmitSucces && <form className={styles["after-form"]} onSubmit={onFormSubmit}>
                <CountTable
                    nameList="Na"
                    selectedWeekday={selectedWeekday}
                    setSelectedWeekday={setSelectedWeekday}
                    selectedInkomEvent={selectedInkomEvent}
                    setSelectedInkomEvent={setSelectedInkomEvent}
                    selectedStudentParty={selectedStudentParty}
                    setSelectedStudentParty={setSelectedStudentParty}

                    bottles={bottles}
                    setBottles={setBottles}
                    crates={crates}
                    setCrates={setCrates}
                    kegs={kegs}
                    setKegs={setKegs}
                    tanks={tanks}
                    setTanks={setTanks}

                    totalCrates={totalCrates}
                    setTotalCrates={setTotalCrates}
                    totalBottles={totalBottles}
                    setTotalBottles={setTotalBottles}
                    totalKegs={totalKegs}
                    setTotalKegs={setTotalKegs}
                    totalTanks={totalTanks}
                    setTotalTanks={setTotalTanks}
                />

                <RemarksContainer
                    remarks={remarks}
                    toggleRemarks={toggleRemarks}
                    contentRemarks={contentRemarks}
                    setContentRemarks={setContentRemarks}
                />

                <Button
                    name="Opslaan"
                    type="submit"
                    id="buttonSubmit"
                />

            </form>}

            {formSubmitSucces && <p>De telling is opgeslagen!</p>}

        </>
    )
}

export default AfterCount


