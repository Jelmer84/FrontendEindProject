import React, {useState} from "react";
import Select from "react-select";
import styles from "../DropdownWeekday-Event/DropdownWeekday-Event.module.css";

function DropdownStudentParty({selectedStudentParty}) {
    const [studentParty, setStudentParty] = useState();
    const handleStudentPartyChange = (studentParty) => {
        setStudentParty(studentParty);
        if(selectedStudentParty)
            selectedStudentParty(studentParty);
    };
    
    const options = [
        {"studentParty": "S.V. Circumflex"},
        {"studentParty": "S.V. Koko"},
        {"studentParty": "M.S.V. Tragos"},
        {"studentParty": "M.S.R.V. Saurus"},
        {"studentParty": "Stichting Onafhankelijk Maastricht"},
    ]

    return (
        <>
            <Select
                placeholder="Selecteer studentenpartij"
                value={studentParty}
                aria-label={"Selecteer studentenpartij"}
                options={options}
                onChange={handleStudentPartyChange}
                getOptionLabel={name => name.studentParty}
                className={styles.dropdown}
            />
        </>
    );
}

export default DropdownStudentParty;






