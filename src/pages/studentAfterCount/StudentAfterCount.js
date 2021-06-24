import React, {useState} from "react";
import StudentCountTable from "../../components/StudentCountForm/StudentCountTable";
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";
import Button from "../../components/Button/Button";

function StudentAfterCount() {
    const [accepted, setAccepted] = useState(false)
    const [notAccepted, setNotAccepted] =useState(true)

    const [remarks, toggleRemarks] = useState(false);
    const [contentRemarks, setContentRemarks] = useState()


    function onFormSubmit(event) {
        event.preventDefault()
        setAccepted(true)
        // setFormSubmitSucces(true);
        console.log(contentRemarks)
        // bundel alle stukjes state
    }

    return (
        <>
            {!accepted && <form onSubmit={onFormSubmit}>
            <StudentCountTable/>
            // form hier maken en ook de state variabelen voor alles in het form hier maken
            // doorgeven aan de submit/cancel button en aan de remarkscontainer
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
                click={() => {
                    setNotAccepted(false);
                }}
            />

            <Button
                name="Akkoord"
                type="submit"
                id="notAccepted"
            />
        </form>}

            {accepted && <p>De telling is opgeslagen!</p>}
        </>
    )
}

export default StudentAfterCount


