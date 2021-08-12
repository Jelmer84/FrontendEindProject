import React, {useState} from "react";
import Select from "react-select";
import data from "./DropdownWeekday-Event.json";
import styles from "./DropdownWeekday-Event.module.css"

function DropdownWeekdayEvent({selectedWeekday, selectedInkomEvent}) {
    const [weekday, setWeekday] = useState('');
    const [inkomEvent, setInkomEvent] = useState('');
    const [inkomEventList, setInkomEventList] = useState([]);

    const handleWeekdayChange = (weekday) => {
        setWeekday(weekday);
        setInkomEventList(weekday.inkomEvents);
        setInkomEvent(null);
        selectedWeekday(weekday);
    };

    const handleInkomEventChange = (weekday) => {
        setInkomEvent(weekday);
        selectedInkomEvent(weekday.nameEvent);
    };

    return (
        <>
            <Select
                placeholder="Selecteer datum"
                value={weekday}
                options={data}
                aria-label="Selecteer datum"
                onChange={handleWeekdayChange}
                getOptionLabel={name => name.weekday}
                className={styles.dropdown}
            />

            <Select
                placeholder="Selecteer evenement"
                aria-label="Selecteer evenement"
                value={inkomEvent}
                options={inkomEventList}
                onChange={handleInkomEventChange}
                getOptionLabel={nameEvent => nameEvent.nameEvent}
                className={styles.dropdown}
            />
        </>
    );
}

export default DropdownWeekdayEvent;












