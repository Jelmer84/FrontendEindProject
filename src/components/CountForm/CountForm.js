import React, {useState} from "react";
import styles from './CountForm.module.css'
import {useForm} from "react-hook-form";
// import axios from "axios";

function CountForm({nameList}) {
    const {handleSubmit, register} = useForm();
    const [bottles, setBottles] = useState([
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        }

    ])
    const [crates, setCrates] = useState([
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0

        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        },
        {
            WaterRood: 0,
            WaterBlauw: 0,
            Pepsi: 0,
            PepsiMax: 0,
            Sisi: 0,
            IceTeaNormal: 0,
            IceTeaGreen110cl: 0,
            IceTeaGreen150cl: 0,
            RedBull: 0,
            RedBullSugarFree: 0,
            RedBullTropical: 0,
            Desperados: 0
        }
    ])
    const [kegs, setKegs] = useState([
        {
            FustJilz: 0,
            FustRadler: 0,
            FustPils: 0,
        },
        {
            FustJilz: 0,
            FustRadler: 0,
            FustPils: 0,
        }
    ])

    const [tanks, setTanks] = useState([{
        Tankbier: 0,
    }
    ])
    const beverages = Object.keys(bottles[0])
    const beveragesCrates = Object.keys(crates[0])
    const beveragesKegs = Object.keys(kegs[0])
    const beveragesTanks = Object.keys(tanks[0])

    // function updateCrates(event, cratesIndex) {
    //     const updatedCratesState = crates.map((crates, index) => {
    //         if (index === cratesIndex) {
    //             return {...crates, [event.target.name]: parseInt(event.target.value)}
    //         } else {
    //             return crates
    //         }
    //     })
    //     setCrates(updatedCratesState)
    // }

    function updateCrates(event, cratesIndex) {
        const updatedCratesState = crates.map((crates, index) => {
            if (index === cratesIndex) {
                return {
                    ...crates,
                    ["crate" + event.target.name]: parseInt(event.target.value)}
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
        console.log(data, "DATA???");

        //     try {
        //         const result = await axios.post('http://localhost:3000/login', data)
        //         // console.log(result.data.accessToken);
        //         login(result.data.accessToken)
        //     } catch (e) {
        //         console.error(e)
        //     }
        // }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>


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
                                            className={styles.beverage}
                                            name={beveragesCrates[beverageIndex]}
                                            // placeholder="0"
                                            value={crates[index][beveragesCrates[beverageIndex]]}
                                            onChange={(event) => updateCrates(event, index)}
                                            type="number"
                                            min="0"

                                            {...register(`crate${beveragesCrates[beverageIndex]}`)}



                                        />  HIER
                                    </td>
                                    <td><input min="0" className={styles.beverage} name={beverages[beverageIndex]}
                                               placeholder="0"

                                               type="number" value={fridge[beverages[beverageIndex]]}
                                               onChange={(event) => updateBottles(event, index)}/></td>
                                </React.Fragment>
                            })}

                            <td>{crates.reduce(function (accumulator, crates) {
                                // console.log("LOGGEN", accumulator + crates[beveragesCrates[beverageIndex]])
                                let totalCrates = accumulator + crates[beveragesCrates[beverageIndex]];
                                // console.log(totalCrates)
                                return totalCrates

                            }, 0)}</td>
                            <td>{bottles.reduce(function (accumulator, bottles) {
                                return accumulator + bottles[beverages[beverageIndex]];
                            }, 0)}</td>
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
                                    <td key={beveragesKegs}><input min="0" className={styles.beverage}
                                                                   name={beveragesKegs[beverageIndex]}
                                                                   placeholder="0"
                                                                   type="number" step="any"
                                                                   value={kegs[index][beveragesKegs[beverageIndex]]}
                                                                   onChange={(event) => updateKegs(event, index)}/>
                                    </td>
                                </React.Fragment>
                            })}

                            <td>{kegs.reduce(function (accumulator, kegs) {
                                return accumulator + kegs[beveragesKegs[beverageIndex]];
                            }, 0)}</td>
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
                                return <td key={index}><input min="0" className={styles.beverage}
                                                              name={beveragesTanks[beverageIndex]}
                                                              placeholder="0"
                                                              type="number"
                                                              value={tanks[index][beveragesTanks[beverageIndex]]}
                                                              onChange={(event) => updateTanks(event, index)}/>
                                </td>
                            })}

                            <td>{tanks.reduce(function (accumulator, tanks) {
                                return accumulator + tanks[beveragesTanks[beverageIndex]];
                            }, 0)}</td>
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

                    <button className={styles["button-formCount"]} type="adjust">Aanpassen</button>

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