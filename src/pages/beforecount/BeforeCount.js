import React from "react";
import styles from "./BeforeCount.module.css"
import DropdownWeekdayEvent from "../../components/dropdowncount/dropdownWeekday-Event/DropdownWeekday-Event";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import CountForm from "../../components/CountForm/CountForm";

function BeforeCount() {


    return (
        <>
            <div className={styles["before-container"]} >

                {/*<DropdownWeekdayEvent/>*/}
                {/*<DropdownStudentParty/>*/}
                <CountForm
                    nameList="Voor"
                />


            </div>
           
        </>
    )
}

export default BeforeCount


