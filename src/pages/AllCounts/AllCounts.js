import React, {useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import Button from "../../components/Button/Button";
import {getAdminOverview} from "../../network/network";
import DropdownEvents from "../../components/DropdownEvents/DropdownEvents";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import DropdownStatus from "../../components/DropdownStatus/DropdownStatus";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function AllCounts() {
    const [hasChanged, setHasChanged] = useState(false)
    const [data, setData] = useState({def: 0})
    const [loading, setLoading] = useState(true)
    const [eventId, setEventId] = useState("")
    const [studentPartyId, setStudentPartyId] = useState("")
    const [stage, setStage] = useState(-1)
    const [message, setMessage] = useState('Please select combination of event, student party and stage to view records')

    async function getOverview() {

        console.log('Print...', eventId, studentPartyId, stage)
        if (eventId && studentPartyId && stage > -1) {
            try {
                const result = await getAdminOverview(eventId, studentPartyId, stage)
                if (result.status === 200) {
                    setData(JSON.parse(result.data.data))
                    setStudentPartyId(result.data.studentPartyId)
                    setEventId(result.data.eventId)
                    setHasChanged(true)
                } else if (result.status === 404) {
                    setMessage('Record not yet available')
                }
                setLoading(false)
                setMessage(undefined)
            } catch (e) {
                console.error(e)
                if (e.response.status)
                    setMessage(e.response.data.message)
            }
        }
    }

    function onEventValueChange(e) {
        setEventId(e.nameEvent)
        setHasChanged(false)
    }

    function onStudentPartyValueChange(e) {
        setStudentPartyId(e.studentParty)
        setHasChanged(false)
    }

    async function onStageValueChange(e) {
        setStage(e.value)
        setHasChanged(false)
    }

    return (
        <>
            <DropdownEvents onValueChange={onEventValueChange}/>
            <DropdownStudentParty selectedStudentParty={onStudentPartyValueChange}/>
            <DropdownStatus onValueChange={onStageValueChange}/>
            <Button click={() => getOverview()} name="Fetch"/>

            {!message && hasChanged && <div>
                {(stage >= 0 && stage < 2) &&
                <StudentCountTable
                    nameList="Alle tellingen"
                    eventId={eventId}
                    data={data}
                    studentPartyId={studentPartyId}
                />}

                {stage === 2 && <CoinsComponent
                    disabled={true} coins={data.coins}
                />}

            </div>}
            {message && <p>{message}</p>}

            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as Excel"/>
        </>
    )
}

export default AllCounts


















