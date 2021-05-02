import React from "react";
import styles from "./BeforeCount.module.css"
import DropdownWeekdayEvent from "../../components/dropdowncount/dropdownWeekday-Event/DropdownWeekday-Event";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import CountForm from "../../components/CountForm/CountForm";

function BeforeCount() {

    return (
        <>
            <form>
                <DropdownWeekdayEvent/>
                <DropdownStudentParty/>
                <CountForm
                    nameList="Voor"
                />
            </form>
            <div className={styles["container-buttons"]}>
                <button className={styles["button-formBeforeCount"]} type="adjust">Aanpassen</button>
                <button className={styles["button-formBeforeCount"]} type="submit">Opslaan</button>
                <button className={styles["button-formBeforeCount"]} type="notAgreed">Niet Akkoord</button>
                <button className={styles["button-formBeforeCount"]} type="agreed">Akkoord</button>
            </div>
        </>
    )
}

export default BeforeCount


