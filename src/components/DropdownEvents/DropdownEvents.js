import React, { useState} from "react";
import Select from "react-select";
import styles from "./DropdownEvents.module.css";

function DropdownEvents() {
    const [nameEvent, setNameEvent] = useState(null);
    const handleNameEventChange = (nameEvent) => {
        setNameEvent(nameEvent);

    };

    console.log(nameEvent)

    const options = [
        {"nameEvent": "Pre-INKOM-Party"},
        {"nameEvent": "Opening"},
        {"nameEvent": "Welcome to Maastricht"},
        {"nameEvent": "Festival"},
        {"nameEvent": "MECC Tuesday"},
        {"nameEvent": "Sportsevent"},
        {"nameEvent": "BBQ"},
        {"nameEvent": "Cantus"},
        {"nameEvent": "Culture Carnival"},
        {"nameEvent": "Aqua Lounge"},
        {"nameEvent": "Open Air Cinema"},
        {"nameEvent": "Heineken Night"},
]

    return (
        <>
            <Select
                placeholder="Selecteer evenement"
                value={nameEvent}
                options={options}
                onChange={handleNameEventChange}
                getOptionLabel={name => name.nameEvent}
                className={styles.dropdown}
            />

        </>
    );
}

export default DropdownEvents;






