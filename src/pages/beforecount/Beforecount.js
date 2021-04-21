import React, {useState} from "react";

function Beforecount() {
    const [total, setTotal] = useState()
    const [fridges, setFridges] =useState([{cola :0, fanta:2, spa:3},{cola :10, fanta:11, spa:12}])


    function addBottles() {
    }

    function updateBottles(event, fridgeIndex) {
        console.log(fridgeIndex)
        console.log(event.target.name)
        console.log(event.target.value)
        //     const updatedBottlesState = {...bottles, [event.target.name]:parseInt(event.target.value)}

        const updatedFridgeState = fridges.map((bottles,index) => {
            if (index === fridgeIndex) {
                return {...bottles, [event.target.name]:parseInt(event.target.value)}
            } else {
                return bottles
            }
        })
        // console.log(updatedBottlesState)
        // setBottles(updatedBottlesState)
        setFridges(updatedFridgeState)
    }

    console.log(fridges)
    return (
        <>
            
            {fridges.map((bottles,index) => {
                return <div onChange={addBottles} className="count-bottles">
                    cola
                    <input name="cola" type="number" placeholder="0" value={bottles.cola} onChange={ (event ) => updateBottles(event, index)}/>
                    fanta
                    <input name="fanta" type="number" placeholder="0" value={bottles.fanta} onChange={ (event ) => updateBottles(event, index)}/>
                    spa
                    <input name="spa" type="number" placeholder="0" value={bottles.spa} onChange={ (event ) => updateBottles(event, index)}/>

                    <h4>{total}</h4>
                </div>
            })}




        </>
    )
}

export default Beforecount


