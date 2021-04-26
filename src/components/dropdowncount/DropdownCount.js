import React, { useState} from "react";
import Select from "react-select";
import data from './weekday-event/weekday-events-data.json';

function DropdownCount() {
    const [weekday, setWeekday] = useState(null);
    const [inkomEvent, setInkomEvent] = useState(null);
    const [inkomEventList, setInkomEventList] = useState([]);

    const handleWeekdayChange = (weekday) => {
        setWeekday(weekday);
        setInkomEventList(weekday.inkomEvents);
        setInkomEvent(null);
    };

    const handleInkomEventChange = (weekday) => {
        setInkomEvent(weekday);
    };

    return (
        <div>
            <p>Dag van de week</p>
            <Select
                placeholder="Selecteer weekdag"
                value={weekday}
                options={data}
                onChange={handleWeekdayChange}
                getOptionLabel={name => name.weekday}
            />

            <p>Evenement</p>
            <Select
                placeholder="Selecteer evenement"
                value={inkomEvent}
                options={inkomEventList}
                onChange={handleInkomEventChange}
                getOptionLabel={nameEvent => nameEvent.nameEvent}
            />
        </div>
    );
}

export default DropdownCount;












