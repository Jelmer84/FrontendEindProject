import React, {useContext, useEffect, useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";
import Button from "../../components/Button/Button";
import axios from "axios";
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
                setMessage('There is no count available for you at this moment, check back later.')
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
                setMessage('Go and see the supervisor!')
            }


        } catch (e) {
            console.error(e)
        }

    }

    // // @todo: beide buttons hebben een eigen clickhandler
    // handleDeny() {
    //       // maak post request met telling-naam of telling-id waarin de property countAccepted: false wordt gezet.
    // }
    //
    // handleAccept() {
    //     // maak post request met telling-naam of telling-id waarin de property countAccepted: true wordt gezet.
    // }

    //@Todo maak een post request voor de remarks, onclick bij accept


    return (
        <>
            {!message && <form>

                {  loading ?
                    <p>loading</p> :
                    <StudentCountTable
                        nameList="Voor" eventId={eventId} data={data} studentPartyId={studentPartyId}/>
                }
                {/*// form hier maken en ook de state variabelen voor alles in het form hier maken*/}
                {/*// doorgeven aan de submit/cancel button en aan de remarkscontainer*/}
                <RemarksContainer
                    remarks={remarks}
                    toggleRemarks={toggleRemarks}
                    contentRemarks={contentRemarks}
                    setContentRemarks={setContentRemarks}
                />


                {/*//@Todo MOET DEZE KNOP RESET ALS TYPE ZIJN?*/}

                <Button
                    name="Niet akkoord"
                    id="notAccepted"
                    value="false"
                    click={(event)=>{
                        event.preventDefault();
                        approveEvent(false)
                    }}
                />

                <Button
                    name="Akkoord"
                    id="accepted"
                    click={(event)=>{
                        event.preventDefault();
                        approveEvent(true)
                    }}
                />
            </form>}
            {message && <p>{message}</p>}

        </>
    )
}

export default StudentAfterCount


