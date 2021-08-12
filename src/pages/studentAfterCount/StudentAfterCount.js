import React, {useContext, useEffect, useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";
import Button from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";
import {approveEventInventory, fetchEventInventory} from "../../network/network";

function StudentAfterCount() {
    const [remarks, toggleRemarks] = useState(false);
    const [contentRemarks, setContentRemarks] = useState()
    const [accepted, setAccepted] = useState(false)
    const [data, setData] = useState({ def : 0})
    const [loading, setLoading] = useState(true)
    const [alreadyCompleted, setAlreadyCompleted] = useState(false)
    const [eventId, setEventId] = useState("")
    const [studentPartyId, setStudentPartyId] = useState("")
    const [message, setMessage] = useState()
    const stage = 1;
    const {user} = useContext(AuthContext)

    useEffect(async ()=>{
        await getEventInventory();
    },[data.def])

    async function getEventInventory(){
        try {
            const {studentID} = user
            const result = await fetchEventInventory(studentID, stage)
            if(result.status === 200){
                setData(JSON.parse(result.data.data))
                setStudentPartyId(result.data.studentPartyId)
                setEventId(result.data.eventId)
            } else if(result.status === 208){
                setAlreadyCompleted(true)
                setMessage('Er is geen telling beschikbaar op het moment,controleer later weer.')
            }
            setLoading(false)

        } catch (e) {
            console.error(e)
        }
    }

    async function approveEvent(approve) {
        try {
            await approveEventInventory({eventId, studentPartyId, approve, stage, studentPartyRemarks: contentRemarks })
            if(approve){
                setAccepted(true)
                setMessage('De telling is opgeslagen!')
            }else{
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
                {  loading ?
                    <p>loading</p> :
                    <StudentCountTable
                        nameList="Na" eventId={eventId} data={data} studentPartyId={studentPartyId}/>
                }
                <RemarksContainer
                    remarks={remarks}
                    toggleRemarks={toggleRemarks}
                    contentRemarks={contentRemarks}
                    setContentRemarks={setContentRemarks}
                />

                <Button
                    type="button"
                    name="Niet akkoord"
                    id="notAccepted"
                    value="false"
                    click={(event)=>{
                        event.preventDefault();
                        approveEvent(false)
                    }}
                />

                <Button
                    type="button"
                    name="Akkoord"
                    id="accepted"
                    click={(event)=>{
                        event.preventDefault();
                        approveEvent(true)
                    }}
                />
            </div>}
            {message && <p>{message}</p>}
        </>
    );
} 

export default StudentAfterCount


