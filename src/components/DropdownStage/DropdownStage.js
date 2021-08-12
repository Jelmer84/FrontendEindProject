import React, {useState} from "react";
import Select from "react-select";
import styles from ".//DropdownStage.module.css";

function DropdownStage({onValueChange}) {
    const [stage, setStage] = useState(null);
    const handleStageChange = (stage) => {
        setStage(stage);
        if(onValueChange)
            onValueChange(stage)
    };

    const options = [
        {"stage": "Voortelling", value: 0},
        {"stage": "Natelling", value: 1},
        {"stage": "Munten", value: 2},
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

export default DropdownStage;






