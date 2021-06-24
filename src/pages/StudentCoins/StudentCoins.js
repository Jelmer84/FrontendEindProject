import React, {useState} from "react";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import Button from "../../components/Button/Button";
import styles from "./StudentCoins.module.css"
import RemarksContainer from "../../components/RemarksContainer/RemarksContainer";

function StudentCoins() {
    const [accepted, setAccepted] = useState(false)
    const [notAccepted, setNotAccepted] = useState(true)


    function onFormSubmit(event) {
        event.preventDefault()
        setAccepted(true)
        // setFormSubmitSucces(true);
        // bundel alle stukjes state
    }


    return (
        <>
            {!accepted && <form onSubmit={onFormSubmit}>
                <CoinsComponent
                    disabled={true}
                />

                <div className={styles["container-studentCoinsButtons"]}>
                    <Button
                        name="Niet akkoord"
                        type="button"
                        id="notAccepted"
                        click={() => {
                            setNotAccepted(true);
                        }}
                    />
                    <Button
                        name="Akkoord"
                        type="submit"
                        id="notAccepted"
                    />
                </div>
            </form>}
        </>
    )
}

export default StudentCoins