import React, {useState} from "react";
import Select from "react-select";
import data from './DropdownWeekday-Event.json';
import styles from "./DropdownWeekday-Event.module.css"


function DropdownWeekdayEvent({selectedWeekday, selectedInkomEvent}) {
    const [weekday, setWeekday] = useState(null);
    const [inkomEvent, setInkomEvent] = useState(null);
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
        // console.log(weekday)
    };




    // console.log(weekday.inkomEvents[0].nameEvent)
    // console.log(inkomEvent)
    // console.log(weekday.inkomEvents[0].nameEvent);


    return (

        <>
           {/*<button onClick={() => selectedWeekday (weekday)}>TESTTS</button>*/}

            <Select
                placeholder="Selecteer weekdag"
                value={weekday}
                options={data}
                onChange={handleWeekdayChange}
                getOptionLabel={name => name.weekday}
                className={styles.dropdown}
            />

            <Select
                placeholder="Selecteer evenement"
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












