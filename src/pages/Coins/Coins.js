import React, {useState} from "react";
import CoinsComponent from "../../components/CoinsComponent/CoinsComponent";
import Button from "../../components/Button/Button";

function Coins() {
    const [formSubmitSucces, setFormSubmitSucces] = useState(false)

    const [coins, setCoins ] = useState(0)


    function onFormSubmit(event) {
        event.preventDefault()
        console.log(coins)
        setFormSubmitSucces(true);
        // bundel alle stukjes state

    }

    return (
        <>
            {!formSubmitSucces && <form onSubmit={onFormSubmit}>
                {!formSubmitSucces && <div>
                    <CoinsComponent
                        disabled={false}
                        coins={coins}
                        setCoins={setCoins}

                    />

                    <Button
                        name="Opslaan"
                        type="submit"
                        id="save"
                    />


                </div>}
            </form>}
        </>
    )
}

export default Coins