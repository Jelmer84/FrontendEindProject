import React, {useState} from "react";
import Select from "react-select";
import styles from "../DropdownStatus/DropdownStatus.module.css";

function DropdownStatus() {
    const [stage, setStage] = useState(null);
    const handleStageChange = (stage) => {
        setStage(stage);
    };

    console.log(stage)

    const options = [
        {"stage": "Voortelling"},
        {"stage": "Natelling"},
        {"stage": "Munten"},
]

    return (
        <>
            <Select
                placeholder="Selecteer stage"
                value={stage}
                options={options}
                onChange={handleStageChange}
                getOptionLabel={name => name.stage}
                className={styles.dropdown}
            />
        </>
    );
}

export default DropdownStatus;






