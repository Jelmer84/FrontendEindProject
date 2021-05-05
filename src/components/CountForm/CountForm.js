import React, {useState} from "react";
import styles from './CountForm.module.css'
import {useForm} from "react-hook-form";

function CountForm({nameList}) {
    const {register} = useForm();
    const [bottles, setBottles] = useState([
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        }

    ])
    const [crates, setCrates] = useState([
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null

        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        },
        {
            Water_Rood: null,
            Water_Blauw: null,
            Pepsi: null,
            Pepsi_Max: null,
            Sisi: null,
            Ice_Tea_Normal: null,
            Ice_Tea_Green_110cl: null,
            Ice_Tea_Green_150cl: null,
            Red_Bull: null,
            Red_Bull_Sugar_Free: null,
            Red_Bull_Tropical: null,
            Desperados: null
        }
    ])
    const [kegs, setKegs] = useState([
        {
            Fust_Jilz: null,
            Fust_Radler: null,
            Fust_Pils: null,
        },
        {
            Fust_Jilz: null,
            Fust_Radler: null,
            Fust_Pils: null,
        }
    ])

    const [tanks, setTanks] = useState([{
        Tankbier: null,
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

    return (
        <>
            <div>

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
                            return <>
                                <th className={styles.headerTwo}>Kratten</th>
                                <th className={styles.headerTwo}>Flessen</th>
                            </>
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
                                return <>
                                    <td><input min="0" onInput="validity.valid||(value='');" className={styles.beverage}


                                               name={beveragesCrates[beverageIndex]}


                                               placeholder="0"
                                               type="number" value={crates[index][beveragesCrates[beverageIndex]]}
                                               onChange={(event) => updateCrates(event, index)}/></td>
                                    <td><input min="0" onInput="validity.valid||(value='');" className={styles.beverage} name={beverages[beverageIndex]}
                                               placeholder="0"
                                               type="number" value={fridge[beverages[beverageIndex]]}
                                               onChange={(event) => updateBottles(event, index)}/></td>
                                </>
                            })}

                            <td>{crates.reduce(function (accumulator, crates) {
                                return accumulator + crates[beveragesCrates[beverageIndex]];
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
                                return <>
                                    <td key={beveragesKegs}><input min="0" onInput="validity.valid||(value='');" className={styles.beverage} name={beveragesKegs[beverageIndex]}
                                                                   placeholder="0"
                                                                   type="number" step="any"
                                                                   value={kegs[index][beveragesKegs[beverageIndex]]}
                                                                   onChange={(event) => updateKegs(event, index)}/>
                                    </td>
                                </>
                            })}

                            <td>{kegs.reduce(function (accumulator, kegs) {
                                return accumulator + kegs[beveragesKegs[beverageIndex]];
                            }, 0)}</td>
                        </tr>
                    })}

                    <tr>
                        <th className={styles.headerOne}>Tankbier</th>
                        {tanks.map((fridge, index) => {
                            return <th className={styles.headerOne}>Tankbier {index + 1}</th>
                        })}

                        <th className={styles.headerOne}>Totaal</th>
                    </tr>
                    {beveragesTanks.map((_, beverageIndex) => {
                        return <tr>
                            <td className={styles.text}>{beveragesTanks[beverageIndex]}</td>
                            {tanks.map((fridge, index) => {
                                return <>
                                    <td><input min="0" onInput="validity.valid||(value='');" className={styles.beverage} name={beveragesTanks[beverageIndex]}
                                               placeholder="0"
                                               type="number" value={tanks[index][beveragesTanks[beverageIndex]]}
                                               onChange={(event) => updateTanks(event, index)}/>
                                    </td>
                                </>
                            })}

                            <td>{tanks.reduce(function (accumulator, tanks) {
                                return accumulator + tanks[beveragesTanks[beverageIndex]];
                            }, 0)}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CountForm


