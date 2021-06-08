import React, { useState} from "react";
import Select from "react-select";
import styles from "./DropdownAdmin.module.css";

function DropdownAdmin() {
    const [role, setRole] = useState(null);
    const handleRoleChange = (role) => {
        setRole(role);
    };

    console.log("ADMINPAGE",role, )

    const options = [
        {"role": "INKOM"},
        {"role": "Studentenpartij"},
        {"role": "Admin"},
    ]

    return (
        <>
            <Select
                placeholder="Selecteer rol"
                value={role}
                options={options}
                onChange={handleRoleChange}
                getOptionLabel={name => name.role}
                className={styles.dropdown}
            />

        </>
    );
}  

export default DropdownAdmin;






