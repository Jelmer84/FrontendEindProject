import React, {useContext, useEffect, useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import Button from "../../components/Button/Button";
import {approveEventInventory, fetchEventInventory} from "../../network/network";
import {AuthContext} from "../../context/AuthContext";

function StudentBeforeCount() {
    const [accepted, setAccepted] = useState(false)
    const [data, setData] = useState({def: 0})
    const [loading, setLoading] = useState(true)
    const [alreadyCompleted, setAlreadyCompleted] = useState(false)
    const [eventId, setEventId] = useState("")
    const [studentPartyId, setStudentPartyId] = useState("")
    const stage = 0;
    const {user} = useContext(AuthContext)
    const [message, setMessage] = useState()

    useEffect(async () => {
        await getEventInventory();
    }, [data.def])

    async function getEventInventory() {
        try {
            const {studentID} = user
            const result = await fetchEventInventory(studentID, stage)
            if (result.status === 200) {
                setData(JSON.parse(result.data.data))
                setStudentPartyId(result.data.studentPartyId)
                setEventId(result.data.eventId)
            } else if (result.status === 208) {
                setAlreadyCompleted(true)
                setMessage('Er is geen telling beschikbaar op het moment,controleer later weer.')
            }
            setLoading(false)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    async function approveEvent(approve) {
        try {
            await approveEventInventory({eventId, studentPartyId, approve, stage})
            if (approve) {
                setAccepted(true)
                setMessage('De telling is opgeslagen!')
            } else {
                setAccepted(false)
                setMessage('Ga naar de organisatie van de INKOM en geef aan dat je de telling afgekeurd hebt!')
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            {!message && <div>
                {loading ?
                    <p>loading</p> :
                    <StudentCountTable
                        nameList="Voor" eventId={eventId} data={data} studentPartyId={studentPartyId}/>
                }

                <Button
                    type="button"
                    name="Niet akkoord"
                    id="notAccepted"
                    value="false"
                    click={(event) => {
                        event.preventDefault();
                        approveEvent(false)
                    }}
                />

                <Button
                    type="button"
                    name="Akkoord"
                    id="accepted"
                    click={(event) => {
                        event.preventDefault();
                        approveEvent(true)
                    }}
                />
            </div>}
            {message && <p>{message}</p>}
        </>
    );
}

export default StudentBeforeCount


