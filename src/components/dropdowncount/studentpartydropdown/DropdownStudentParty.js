import React, {useState} from "react";
import Select from "react-select";
import styles from "../dropdownWeekday-Event/DropdownWeekday-Event.module.css";

function DropdownStudentParty({selectedStudentParty}) {
    const [studentParty, setStudentParty] = useState(null);
    const handleStudentPartyChange = (studentParty) => {
        setStudentParty(studentParty);
        selectedStudentParty(studentParty);
        
    };

    console.log(studentParty)

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
                options={options}
                onChange={handleStudentPartyChange}
                getOptionLabel={name => name.studentParty}
                className={styles.dropdown}
            />

        </>
    );
}

export default DropdownStudentParty;






