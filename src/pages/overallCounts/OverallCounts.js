import React, {useContext, useEffect, useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import {AuthContext} from "../../context/AuthContext";
import {fetchEventInventory} from "../../network";
import DropdownEvents from "../../components/DropdownEvents/DropdownEvents";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import DropdownStatus from "../../components/DropdownStatus/DropdownStatus";


function OverallCounts() {
    const [loading, setLoading] = useState(true)
    const [eventId, setEventId] = useState("")
    const [studentPartyId, setStudentPartyId] = useState("")
    const [data, setData] = useState({ def : 0})
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
                // setAlreadyCompleted(true)
                // setMessage('There is no count available for you at this moment, check back later.')
            }
            setLoading(false)

        } catch (e) {
            console.error(e)
        }
    }



    return (
        <>
            <div>
                <DropdownEvents/>
                <DropdownStudentParty/>
                <DropdownStatus/>


                    {/*<StudentCountTable*/}
                    {/*    nameList="Voor" eventId={eventId} data={data} studentPartyId={studentPartyId}*/}
                    {/*/>*/}


            </div>

        </>
    )
}

export default OverallCounts



















