import React, { useState} from "react";
import Select from "react-select";
import data from "./DropdownStudentParty.json"
import styles from "../dropdownWeekday-Event/DropdownWeekday-Event.module.css";

function DropdownStudentParty() {
    const [studentParty, setStudentParty] = useState(null);
    const handleStudentPartyChange = (studentParty) => {setStudentParty(studentParty);};

    console.log(studentParty)
    

    return (
        <>
            <Select
                placeholder="Selecteer studentenpartij"
                value={studentParty}
                options={data}
                onChange={handleStudentPartyChange}
                getOptionLabel={name => name.studentParty}
                className={styles.dropdown}
            />

        </>
    );
}  

export default DropdownStudentParty;






