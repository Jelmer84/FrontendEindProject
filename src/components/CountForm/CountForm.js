import React, {useState} from "react";
import styles from './CountForm.module.css'
import {useForm} from "react-hook-form";
import DropdownWeekdayEvent from "../dropdowncount/dropdownWeekday-Event/DropdownWeekday-Event";
import DropdownStudentParty from "../dropdowncount/studentpartydropdown/DropdownStudentParty";

function CountForm({nameList}) {
    const [selectedWeekday, setSelectedWeekday] =useState();
    const [selectedInkomEvent, setSelectedInkomEvent] =useState();
    const [selectedStudentParty, setSelectedStudentParty] =useState();


    const {handleSubmit} = useForm();
    const [bottles, setBottles] = useState([
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        }

    ])
    const [crates, setCrates] = useState([
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0

        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        },
        {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        }
    ])
    const [kegs, setKegs] = useState([
        {
            Fust_Jilz: 0,
            Fust_Radler: 0,
            Fust_Pils: 0,
        },
        {
            Fust_Jilz: 0,
            Fust_Radler: 0,
            Fust_Pils: 0,
        }
    ])

    const [tanks, setTanks] = useState([{
        Tankbier: 0,
    },
        {
            Tankbier: 0,
        }
    ])
    const beverages = Object.keys(bottles[0])
    const beveragesCrates = Object.keys(crates[0])
    const beveragesKegs = Object.keys(kegs[0])
    const beveragesTanks = Object.keys(tanks[0])

    function updateCrates(event, cratesIndex) {
        const updatedCratesState = crates.map((crates, index) => {
            if (index === cratesIndex) {
                return {...crates, [event.target.name]: parseInt(event.target.value)}
            } else {
                return crates
            }
        })
        setCrates(updatedCratesState)
    }

    function updateBottles(event, bottlesIndex) {
        const updatedBottleState = bottles.map((bottles, index) => {
            if (index === bottlesIndex) {
                return {...bottles, [event.target.name]: parseInt(event.target.value)}
            } else {
                return bottles
            }
        })
        setBottles(updatedBottleState)
    }

    function updateKegs(event, kegsIndex) {
        const updatedKegsState = kegs.map((kegs, index) => {
            if (index === kegsIndex) {
                return {...kegs, [event.target.name]: parseFloat(event.target.value)}
            } else {
                return kegs
            }
        })
        setKegs(updatedKegsState)
    }

    function updateTanks(event, tanksIndex) {
        const updatedTanksState = tanks.map((tanks, index) => {
            if (index === tanksIndex) {
                return {...tanks, [event.target.name]: parseFloat(event.target.value)}
            } else {
                return tanks
            }
        })
        setTanks(updatedTanksState)
    }

    function onFormSubmit(data) {
        // console.log(data, "DATA???");

        console.log("crates per fridge", crates)


        const totalCrates = crates.reduce((accumulator, crate) => {
            // console.log(accumulator, crate)
            Object.keys(accumulator).forEach(brand => {
                accumulator[brand] = accumulator[brand] + crate[brand]
            })
            return accumulator
        }, {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        })

        console.log("bottles per fridge", bottles)
        const totalBottles = bottles.reduce((accumulator, bottle) => {
            // console.log(accumulator, bottle)
            Object.keys(accumulator).forEach(brand => {
                accumulator[brand] = accumulator[brand] + bottle[brand]
            })
            return accumulator
        }, {
            Water_Rood: 0,
            Water_Blauw: 0,
            Pepsi: 0,
            Pepsi_Max: 0,
            Sisi: 0,
            Ice_Tea_Normal: 0,
            Ice_Tea_Green_110cl: 0,
            Ice_Tea_Green_150cl: 0,
            Red_Bull: 0,
            Red_Bull_Sugar_Free: 0,
            Red_Bull_Tropical: 0,
            Desperados: 0
        })

        console.log("kegs per fridge", kegs)
        const totalKegs = kegs.reduce((accumulator, keg) => {
            // console.log(accumulator, keg)
            Object.keys(accumulator).forEach(brand => {
                accumulator[brand] = accumulator[brand] + keg[brand]
            })
            return accumulator
        }, {
            Fust_Jilz: 0,
            Fust_Radler: 0,
            Fust_Pils: 0,
        })

        console.log("tanks per fridge", tanks)
        const totalTanks = tanks.reduce((accumulator, tank) => {
            // console.log(accumulator, tank)
            Object.keys(accumulator).forEach(brand => {
                accumulator[brand] = accumulator[brand] + tank[brand]
            })
            return accumulator
        }, {
            Tankbier: 0,
        })

        console.log("total crates", totalCrates)
        console.log("total bottles", totalBottles)
        console.log("total kegs", totalKegs)
        console.log("total tanks", totalTanks)


        console.log(selectedWeekday)
        console.log(selectedInkomEvent)
        console.log(selectedStudentParty)

    }




    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                 <div className={styles.dropdownlists}>
                <DropdownWeekdayEvent
                    selectedWeekday={selectedWeekday => setSelectedWeekday(selectedWeekday)}
                    selectedInkomEvent={selectedInkomEvent => setSelectedInkomEvent(selectedInkomEvent)}
                />
                <DropdownStudentParty
                    selectedStudentParty={selectedStudentParty => setSelectedStudentParty(selectedStudentParty)}
                />
                 </div>

                <table border="2">
                    <thead>
                    <tr>
                        <th className={styles.text} colSpan="17">Tellijst {nameList}</th>
                    </tr>
                    <tr>
                        <th className={styles.headerOne} rowSpan="2">Drank / Per krat / Inhoudsmaat</th>
                        {bottles.map((fridge, index) => {
                            return <th key={index} className={styles.headerOne} colSpan="2">Koeling {index + 1}</th>
                        })}
                        <th className={styles.headerOne} colSpan="2">Totaal</th>
                    </tr>
                    <tr>
                        {bottles.map((fridge, index) => {
                            return <React.Fragment key={index}>
                                <th className={styles.headerTwo}>Kratten</th>
                                <th className={styles.headerTwo}>Flessen</th>
                            </React.Fragment>
                        })}
                        <th className={styles.headerTwo}>Kratten</th>
                        <th className={styles.headerTwo}>Flessen</th>
                    </tr>
                    </thead>

                    <tbody>
                    {beverages.map((_, beverageIndex) => {
                        return <tr key={beverageIndex}>
                            <td className={styles.text}>{beverages[beverageIndex]}</td>
                            {bottles.map((fridge, index) => {
                                return <React.Fragment key={index}>
                                    <td>
                                        <input
                                            key={index}
                                            min="0"
                                            className={styles.beverage}
                                            name={beveragesCrates[beverageIndex]}
                                            placeholder="0"
                                            type="number"
                                            value={crates[index][beveragesCrates[beverageIndex]]}
                                            onChange={(event) => updateCrates(event, index)}

                                        />
                                    </td>

                                    <td>
                                        <input
                                            min="0"
                                            className={styles.beverage}
                                            name={beverages[beverageIndex]}
                                            placeholder="0"
                                            type="number"
                                            value={fridge[beverages[beverageIndex]]}
                                            onChange={(event) => updateBottles(event, index)}/>
                                    </td>
                                </React.Fragment>
                            })}

                            <td>
                                {crates.reduce(function (accumulator, crates) {
                                    return accumulator + crates[beverages[beverageIndex]];
                                }, 0)}
                            </td>
                            <td>
                                {bottles.reduce(function (accumulator, bottles) {
                                    return accumulator + bottles[beverages[beverageIndex]];
                                }, 0)}
                            </td>
                        </tr>
                    })}

                    <tr>
                        <th className={styles.headerOne}>Fusten</th>
                        {kegs.map((fridge, index) => {
                            return <th key={index} className={styles.headerOne}>Fusten {index + 1}</th>
                        })}
                        <th className={styles.headerOne}>Totaal</th>
                    </tr>
                    {beveragesKegs.map((_, beverageIndex) => {
                        return <tr key={beverageIndex}>
                            <td className={styles.text}>{beveragesKegs[beverageIndex]}</td>
                            {kegs.map((fridge, index) => {
                                return <React.Fragment key={index}>
                                    <td key={beveragesKegs}>
                                        <input
                                            min="0"
                                            className={styles.beverage}
                                            name={beveragesKegs[beverageIndex]}
                                            placeholder="0"
                                            type="number"
                                            step="any"
                                            value={kegs[index][beveragesKegs[beverageIndex]]}
                                            onChange={(event) => updateKegs(event, index)}/>
                                    </td>
                                </React.Fragment>
                            })}
                            <td>
                                {kegs.reduce(function (accumulator, kegs) {
                                    return accumulator + kegs[beveragesKegs[beverageIndex]];
                                }, 0)}
                            </td>
                        </tr>
                    })}

                    <tr>
                        <th className={styles.headerOne}>Tankbier</th>
                        {tanks.map((fridge, index) => {
                            return <th key={index} className={styles.headerOne}>Tankbier {index + 1}</th>
                        })}
                        <th className={styles.headerOne}>Totaal</th>
                    </tr>
                    {beveragesTanks.map((_, beverageIndex) => {
                        return <tr key={beverageIndex}>
                            <td className={styles.text}>{beveragesTanks[beverageIndex]}</td>
                            {tanks.map((fridge, index) => {
                                return <td key={index}>
                                    <input
                                        min="0"
                                        className={styles.beverage}
                                        name={beveragesTanks[beverageIndex]}
                                        placeholder="0"
                                        type="number"
                                        value={tanks[index][beveragesTanks[beverageIndex]]}
                                        onChange={(event) => updateTanks(event, index)}/>
                                </td>
                            })}
                            <td>{tanks.reduce(function (accumulator, tanks) {
                                return accumulator + tanks[beveragesTanks[beverageIndex]];
                            }, 0)}
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>

                <div className={styles["container-buttons"]}>

                    {/*INKOM BUTTONS*/}
                    {/*    AANPAS BUTTON */}
                    {/*        Button aanpassen waarschijnlijk niet nodig, INKOM slaat op, bij afkeuren door SP word telling weer zichtbaar.*/}
                    {/*    OPSLAAN BUTTON.     */}
                    {/*        Telling moet onzichtbaar worden voor INKOM*/}
                    {/*        zichtbaar voor SP, inclusief de buttons SP. Kan wellicht met een value van true naar false en vica versa.*/}
                    {/*        Telling moet opgeslagen worden in Backend*/}

                    <button className={styles["button-formCount"]}>Aanpassen</button>

                    <button className={styles["button-formCount"]} type="submit" id="buttonSubmit">Opslaan</button>


                    {/*SP BUTTONS*/}
                    {/*    NIET AKKOORD*/}
                    {/*        Telling moet weer onzichtbaar worden voor SP, wellicht met value true en false*/}
                    {/*        Eedere opgeslagen telling met get request naar INKOM terug.*/}
                    {/*    AKKOORD*/}
                    {/*        data opgeslagen in de backend*/}
                    {/*        data met get request naar totaal tellingen*/}
                    {/*        bonus per mail met pdf de telling*/}

                    <button className={styles["button-formCount"]} type="notAgreed">Niet Akkoord</button>

                    <button className={styles["button-formCount"]} type="agreed">Akkoord</button>


                </div>
            </form>


        </>
    );
}

export default CountForm


// onInput="validity.valid||(value='');"
// zorgt ervoor dat de ingetypte waarde niet onder de nul kan, geeft error bij aanklikken button