import React, {useContext, useEffect, useState} from "react";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import Button from "../../components/Button/Button";
import styles from "./StudentCoins.module.css"
import {AuthContext} from "../../context/AuthContext";
import {approveEventInventory, fetchEventInventory} from "../../network/network";

function StudentCoins() {
    const [accepted, setAccepted] = useState(false)
    const [data, setData] = useState({ def : 0})
    const [loading, setLoading] = useState(true)
    const [alreadyCompleted, setAlreadyCompleted] = useState(false)
    const [eventId, setEventId] = useState("")
    const [studentPartyId, setStudentPartyId] = useState("")
    const [message, setMessage] = useState()
    const stage = 2; // coin stage
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
            await approveEventInventory({eventId, studentPartyId,approve, stage})
            if(approve){
                setAccepted(true)
                setMessage('De telling is opgeslagen!')
            }else {
                setAccepted(false)
                setMessage('Go and see the supervisor!')
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            {!message &&
            <div className={styles["coins-container"]}>
                {  loading ?
                    <p>loading</p> :
                    <div>
                        <p><strong>Weekdag:</strong> {data.selectedWeekday.weekday}</p>
                        <p><strong>Evenement:</strong> {eventId}</p>
                        <p><strong>StudentenPartij:</strong> {studentPartyId}</p>
                    </div>
                }

                {!loading && <form>
                    <CoinsComponent
                        disabled={true}  coins={data.coins}
                    />

                    <div className={styles["container-studentCoinsButtons"]}>
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
                    </div>
                </form>}
            </div>
            }
            {message && <p>{message}</p>}
        </>
    );
}

export default StudentCoins