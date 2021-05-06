import React, {useState} from "react";
import styles from "./AfterCount.module.css"
// import DropdownWeekdayEvent from "../../components/dropdowncount/dropdownWeekday-Event/DropdownWeekday-Event";
// import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import CountForm from "../../components/CountForm/CountForm";
import {useForm} from "react-hook-form";

function AfterCount() {
    const {handleSubmit} = useForm();
    const [remarks, toggleRemarks] = useState(false)


    function onFormSubmit(data) {
        console.log(data, "Hoop dat dit werkt");
    }

    return (
        <>
            <form className={styles["after-form"]} onSubmit={handleSubmit(onFormSubmit)}>

                {/*<DropdownWeekdayEvent/>*/}
                {/*<DropdownStudentParty/>*/}
                <CountForm
                    nameList="Na"
                />

                <div className={styles["remarks-container"]}>
                    <label htmlFor="remarks">
                        Opmerkingen
                        <input
                            type="checkbox"
                            name="remarks"
                            id="remarks"
                            onChange={(event) => toggleRemarks(event.target.checked)}
                        />
                    </label>

                    {remarks === true && (
                        <textarea
                            name="test"
                            id="test"
                            cols="60"
                            rows="10"
                            placeholder="Zet hier je opmerkingen, geef bij overheveling aan VAN welke studentenpartij NAAR welke studentenpartij!"/>
                    )}
                </div>


                <table border="2">
                    <thead>
                    <tr>
                        <th className={styles.headerOne}>Munten</th>
                        <th className={styles.headerOne}>Totaal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Munten</td>
                        <td><input type="number" placeholder="0"/></td>
                    </tr>
                    </tbody>
                </table>

                <div className={styles["container-buttons"]}>
                    <button className={styles["button-formAfterCount"]} type="adjust">Aanpassen</button>
                    <button className={styles["button-formAfterCount"]} type="submit" id="buttonSubmit">Opslaan
                    </button>
                    <button className={styles["button-formAfterCount"]} type="notAgreed">Niet Akkoord</button>
                    <button className={styles["button-formAfterCount"]} type="agreed">Akkoord</button>
                </div>
            </form>

        </>
    )
}

export default AfterCount


