import React, {useState} from "react";

function StudentPartyDropdown() {
    const [studentParty, setStudentParty] = useState("")

    return (
        <>
            <select onChange={(event) => {
                const selectedStudentParty = event.target.value;
                setStudentParty(selectedStudentParty);
            }}>
                <option>Kies een studentenpartij</option>
                <option value="S.V. Circumflex">S.V. Circumflex</option>
                <option value="S.V. Koko">S.V. Koko</option>
                <option value="M.S.V. Tragos">M.S.V. Tragos</option>
                <option value="M.S.R.V. Saurus">M.S.R.V. Saurus</option>
                <option value="Stichting Onafhankelijk Maastricht">Stichting Onafhankelijk Maastricht</option>
            </select>
            {studentParty}
        </>
    );
}

export default StudentPartyDropdown;


