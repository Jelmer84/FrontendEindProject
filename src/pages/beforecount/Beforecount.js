import React, {useState} from "react";
import './Beforecount.module.css'
import styles from './Beforecount.module.css'
import DropdownCount from "../../components/dropdowncount/DropdownCount";
import StudentPartyDropdown from "../../components/dropdowncount/studentpartydropdown/StudentPartyDropdown";

function Beforecount() {
    // let [total, setTotal] = useState()
    const [bottles, setBottles] = useState([{colaBotlle: "", fantaBottle: "", spaBottle: 3}, {
        colaBotlle: "",
        fantaBottle: "",
        spaBottle: 12
    }])
    const [crates, setCrates] = useState([{colaCrate: "", fantaCrate: 17, spaCrate: 16}, {
        colaCrate: "",
        fantaCrate: 18,
        spaCrate: 19
    }])


    function updateBottles(event, bottlesIndex) {
        console.log(bottlesIndex)
        console.log(event.target.name)
        console.log(event.target.value)
        //     const updatedBottlesState = {...bottles, [event.target.name]:parseInt(event.target.value)}

        const updatedBottleState = bottles.map((bottles, index) => {
            if (index === bottlesIndex) {
                return {...bottles, [event.target.name]: parseInt(event.target.value)}
            } else {
                return bottles
            }
        })
        // console.log(updatedBottlesState)
        // setBottles(updatedBottlesState)
        setBottles(updatedBottleState)
    }

    console.log(bottles)


    function updateCrates(event, cratesIndex) {
        console.log(cratesIndex)
        console.log(event.target.name)
        console.log(event.target.value)

        const updatedCratesState = crates.map((crates, index) => {
            if (index === cratesIndex) {
                return {...crates, [event.target.name]: parseInt(event.target.value)}
            } else {
                return crates
            }
        })
        // console.log(updatedBottlesState)
        // setBottles(updatedBottlesState)
        setCrates(updatedCratesState)
    }

    console.log(crates)


    const totalColaBottles = bottles.reduce(function (accumulator, bottles) {
        return accumulator + bottles.colaBotlle;
    }, 0);

    const totalFantaBottles = bottles.reduce(function (accumulator, bottles) {
        return accumulator + bottles.fantaBottle;
    }, 0);


    const totalColaCrates = crates.reduce(function (accumulator, crates) {
        return accumulator + crates.colaCrate;
    }, 0);


    return (
        <>

            {bottles.map((bottles, index) => {
                return <div key={index}>
                    colaBotlle
                    <input className={styles.beverage} name="colaBotlle" type="number" placeholder="0"
                           value={bottles.colaBotlle} onChange={(event) => updateBottles(event, index)}/>
                    fanta
                    <input className={styles.beverage} name="fantaBottle" type="number" placeholder="0"
                           value={bottles.fantaBottle} onChange={(event) => updateBottles(event, index)}/>
                    spa
                    <input className={styles.beverage} name="spa" type="number" placeholder="0"
                           value={bottles.spaBottle} onChange={(event) => updateBottles(event, index)}/>

                    <h4>Totaal cola FLESSEN {totalColaBottles}</h4>
                    <h4>Totaal Fanta FLESSEN {totalFantaBottles}</h4>


                    {crates.map((crates, index) => {
                        return <div key={index}>
                            colaCrate
                            <input className={styles.beverage} name="colaCrate" type="number" placeholder="0"
                                   value={crates.colaCrate} onChange={(event) => updateCrates(event, index)}/>
                            {/*fanta*/}
                            {/*<input className={styles.beverage} name="fanta" type="number" placeholder="0" value={bottles.fantaBottle} onChange={ (event ) => updateBottles(event, index)}/>*/}
                            {/*spa*/}
                            {/*<input className={styles.beverage} name="spa" type="number" placeholder="0" value={bottles.spaBottle} onChange={ (event ) => updateBottles(event, index)}/>*/}

                            <h4>Totaal cola KRATTEN {totalColaCrates}</h4>
                        </div>
                    })}

                    <form>

                        <DropdownCount/>

                        <StudentPartyDropdown/>


                        <table border="2">
                            <thead>
                            <tr>
                                <th className={styles.text} colSpan="17">Tellijst Voor</th>
                            </tr>
                            <tr>
                                <th className={styles.headerone} rowSpan="2">Drank / Per krat / Inhoudsmaat</th>
                                <th className={styles.headerone} colSpan="2">Koeling 1</th>
                                <th className={styles.headerone} colSpan="2">Koeling 2</th>
                                <th className={styles.headerone} colSpan="2">Koeling 3</th>
                                <th className={styles.headerone} colSpan="2">Koeling 4</th>
                                <th className={styles.headerone} colSpan="2">Koeling 5</th>
                                <th className={styles.headerone} colSpan="2">Koeling 6</th>
                                <th className={styles.headerone} colSpan="2">Koelcontainer</th>
                                <th className={styles.headerone} colSpan="2">Totaal</th>
                            </tr>
                            <tr>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                                <th className={styles.headertwo}>Kratten</th>
                                <th className={styles.headertwo}>Flessen</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.text}>Water rood, 12/110cl</td>
                                <td><input className={styles.beverage} name="sparoodkrat" placeholder="0"/></td>
                                <td><input className={styles.beverage} name="sparoodfles" placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td className={styles.text}>Water blauw, 12/110cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Pepsi, 12/110cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} name="colaBotlle" type="number" placeholder="0"
                                           value={bottles.colaBotlle}
                                           onChange={(event) => updateBottles(event, index)}/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>

                                <td><input className={styles.beverage} name="colaBotlle" type="number" placeholder="0"
                                           value={bottles.colaBotlle}
                                           onChange={(event) => updateBottles(event, index)}/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td>{totalColaBottles}</td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Pepsi Max 12/110cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Sisi, 12/110cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Ice Tea 12/110cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Ice Tea GREEN 12/110cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Ice Tea GREEN 12/150cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Red Bull, 25 cl (tray à 24 st)</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>RB Sugar Free, 25 cl (tray à 24 st)</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>RB Tropical, 25 cl (tray à 12 st)</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Desperados, 24/33cl</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>

                                <th className={styles.headerthree}>Fusten</th>
                                <th className={styles.headerthree}>Fusten</th>
                                <th className={styles.headerthree}>Fusten</th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}></th>
                                <th className={styles.headerthree}>Fusten</th>
                            </tr>
                            <tr>
                                <td className={styles.text}>Jillz, fust 20L</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.text}>Radler, fust 20L</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td className={styles.text}>Pils, fust 50 ltr</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className={styles.headerthree}>Tankbier</th>
                                <th className={styles.headerthree}>Voor ltr.</th>
                                <th className={styles.headerthree}></th>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <td className={styles.headerthree}></td>
                                <th className={styles.headerthree}>Voor ltr.</th>
                            </tr>
                            <tr>
                                <td className={styles.text}>Tankbier 1000 ltr.</td>
                                <td><input className={styles.beverage} placeholder="0"/></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td className={styles.black}></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        <button type="adjust">Aanpassen</button>
                        <button type="submit">Opslaan</button>
                    </form>
                </div>
            })}


        </>
    )
}

export default Beforecount


