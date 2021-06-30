import React, {useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";
import Button from "../../components/Button/Button";
import axios from "axios";

function StudentAfterCount() {
    const [accepted, setAccepted] = useState(false)
    const [notAccepted, setNotAccepted] = useState(true)

    const [remarks, toggleRemarks] = useState(false);
    const [contentRemarks, setContentRemarks] = useState()


    async function onFormSubmit(event) {
        event.preventDefault()
        try {
            const result = await axios.get(`basisUrl/afterCounts/eventName`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            // set een state met result want dat zijn al je waardes
        } catch (e) {
            console.error(e)
        }
        setAccepted(true)
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
            {!accepted && <form onSubmit={onFormSubmit}>
                <StudentCountTable
                    nameList="Na"
                />
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
                    type="button"
                    id="notAccepted"
                />

                <Button
                    name="Akkoord"
                    type="submit"
                    id="accepted"
                />
            </form>}

            {accepted && <p>De telling is opgeslagen!</p>}
        </>
    )
}

export default StudentAfterCount


