import React, {useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import Button from "../../components/Button/Button";
import {getAdminOverview} from "../../network/network";
import DropdownEvents from "../../components/DropdownEvents/DropdownEvents";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DropdownStage from "../../components/DropdownStage/DropdownStage";

function AllCounts() {
    const [hasChanged, setHasChanged] = useState(false)
    const [data, setData] = useState({def: 0})
    const [loading, setLoading] = useState(true)
    const [eventId, setEventId] = useState("")
    const [studentPartyId, setStudentPartyId] = useState("")
    const [stage, setStage] = useState(-1)
    const [message, setMessage] = useState('Selecteer een evenement, vereniging en telling en druk op ophalen om de date te bekijken.')

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
                    setMessage('Record not (yet) available')
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
            <DropdownStage onValueChange={onStageValueChange}/>
            <Button click={() => getOverview()} name="Ophalen data"/>

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

                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as Excel"/>


            </div>}
            {message && <p>{message}</p>}


        </>
    )
}

export default AllCounts


















