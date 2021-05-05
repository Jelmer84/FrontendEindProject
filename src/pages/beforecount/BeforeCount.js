import React from "react";
import styles from "./BeforeCount.module.css"
import DropdownWeekdayEvent from "../../components/dropdowncount/dropdownWeekday-Event/DropdownWeekday-Event";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import CountForm from "../../components/CountForm/CountForm";
import {useForm} from "react-hook-form";

function BeforeCount() {
    const {handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data, "Hoop dat dit werkt");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>

                <DropdownWeekdayEvent/>
                <DropdownStudentParty/>
                <CountForm
                    nameList="Voor"
                />

                <div className={styles["container-buttons"]}>
                    <button className={styles["button-formBeforeCount"]} type="adjust">Aanpassen</button>
                    <button className={styles["button-formBeforeCount"]} type="submit" id="buttonSubmit">Opslaan</button>
                    <button className={styles["button-formBeforeCount"]} type="notAgreed">Niet Akkoord</button>
                    <button className={styles["button-formBeforeCount"]} type="agreed">Akkoord</button>
                </div>
            </form>
           
        </>
    )
}

export default BeforeCount


