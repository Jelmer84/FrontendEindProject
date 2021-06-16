import React, {useState} from "react";
import styles from './StudentCountForm.module.css'
import axios from "axios";

function StudentCountForm({nameList}) {


    // const [saved, setSaved] = useState(false)
    // const [inputDisabled, setInputDisabled] = useState(false)

    // @Todo get request
    async function onFormSubmit(combined) {
        try {
            let count = 1;
            const result = await axios.get(`http://localhost:8080/${count}`, combined)
        } catch (e) {
            console.error(e)
        }
    }






    return (
        <>
            <form>
                <table border="2">
                    <thead>
                    <tr>
                        <th className={styles.text} colSpan="17">Tellijst {nameList}</th>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th className={styles.headerOne} rowSpan="2">Drank / Per krat / Inhoudsmaat</th>*/}
                    {/*    {bottles.map((fridge, index) => {*/}
                    {/*        return <th key={index} className={styles.headerOne} colSpan="2">Koeling {index + 1}</th>*/}
                    {/*    })}*/}
                    {/*    <th className={styles.headerOne} colSpan="2">Totaal</th>*/}
                    {/*</tr>*/}

                    {/*<tr>*/}
                    {/*    {bottles.map((fridge, index) => {*/}
                    {/*        return <React.Fragment key={index}>*/}
                    {/*            <th className={styles.headerTwo}>Kratten</th>*/}
                    {/*            <th className={styles.headerTwo}>Flessen</th>*/}
                    {/*        </React.Fragment>*/}
                    {/*    })}*/}
                    {/*    <th className={styles.headerTwo}>Kratten</th>*/}
                    {/*    <th className={styles.headerTwo}>Flessen</th>*/}
                    {/*</tr>*/}
                    </thead>

                    <tbody>
                    {/*{beverages.map((_, beverageIndex) => {*/}
                    {/*    return <tr key={beverageIndex}>*/}
                    {/*        <td className={styles.text}>{beverages[beverageIndex]}</td>*/}
                    {/*        {bottles.map((fridge, index) => {*/}
                    {/*            return <React.Fragment key={index}>*/}
                    {/*                <td>*/}
                    {/*                    <input*/}
                    {/*                        disabled={inputDisabled}*/}
                    {/*                        key={index}*/}
                    {/*                        min="0"*/}
                    {/*                        className={styles.beverage}*/}
                    {/*                        name={beveragesCrates[beverageIndex]}*/}
                    {/*                        placeholder="0"*/}
                    {/*                        type="number"*/}
                    {/*                        value={crates[index][beveragesCrates[beverageIndex]]}*/}
                    {/*                        onChange={(event) => updateCrates(event, index)}*/}

                    {/*                    />*/}
                    {/*                </td>*/}

                    {/*                <td>*/}
                    {/*                    <input*/}
                    {/*                        disabled={inputDisabled}*/}
                    {/*                        min="0"*/}
                    {/*                        className={styles.beverage}*/}
                    {/*                        name={beverages[beverageIndex]}*/}
                    {/*                        placeholder="0"*/}
                    {/*                        type="number"*/}
                    {/*                        value={fridge[beverages[beverageIndex]]}*/}
                    {/*                        onChange={(event) => updateBottles(event, index)}/>*/}
                    {/*                </td>*/}
                    {/*            </React.Fragment>*/}
                    {/*        })}*/}

                    {/*        <td>*/}
                    {/*            {crates.reduce(function (accumulator, crates) {*/}
                    {/*                return accumulator + crates[beverages[beverageIndex]];*/}
                    {/*            }, 0)}*/}
                    {/*        </td>*/}
                    {/*        <td>*/}
                    {/*            {bottles.reduce(function (accumulator, bottles) {*/}
                    {/*                return accumulator + bottles[beverages[beverageIndex]];*/}
                    {/*            }, 0)}*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*})}*/}

                    {/*<tr>*/}
                    {/*    <th className={styles.headerOne}>Fusten</th>*/}
                    {/*    {kegs.map((fridge, index) => {*/}
                    {/*        return <th key={index} className={styles.headerOne}>Fusten {index + 1}</th>*/}
                    {/*    })}*/}
                    {/*    <th className={styles.headerOne}>Totaal</th>*/}
                    {/*</tr>*/}
                    {/*{beveragesKegs.map((_, beverageIndex) => {*/}
                    {/*    return <tr key={beverageIndex}>*/}
                    {/*        <td className={styles.text}>{beveragesKegs[beverageIndex]}</td>*/}
                    {/*        {kegs.map((fridge, index) => {*/}
                    {/*            return <React.Fragment key={index}>*/}
                    {/*                <td key={beveragesKegs}>*/}
                    {/*                    <input*/}
                    {/*                        disabled={inputDisabled}*/}
                    {/*                        min="0"*/}
                    {/*                        className={styles.beverage}*/}
                    {/*                        name={beveragesKegs[beverageIndex]}*/}
                    {/*                        placeholder="0"*/}
                    {/*                        type="number"*/}
                    {/*                        step="any"*/}
                    {/*                        value={kegs[index][beveragesKegs[beverageIndex]]}*/}
                    {/*                        onChange={(event) => updateKegs(event, index)}/>*/}
                    {/*                </td>*/}
                    {/*            </React.Fragment>*/}
                    {/*        })}*/}
                    {/*        <td>*/}
                    {/*            {kegs.reduce(function (accumulator, kegs) {*/}
                    {/*                return accumulator + kegs[beveragesKegs[beverageIndex]];*/}
                    {/*            }, 0)}*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*})}*/}

                    {/*<tr>*/}
                    {/*    <th className={styles.headerOne}>Tankbier</th>*/}
                    {/*    {tanks.map((fridge, index) => {*/}
                    {/*        return <th key={index} className={styles.headerOne}>Tankbier {index + 1}</th>*/}
                    {/*    })}*/}
                    {/*    <th className={styles.headerOne}>Totaal</th>*/}
                    {/*</tr>*/}
                    {/*{beveragesTanks.map((_, beverageIndex) => {*/}
                    {/*    return <tr key={beverageIndex}>*/}
                    {/*        <td className={styles.text}>{beveragesTanks[beverageIndex]}</td>*/}
                    {/*        {tanks.map((fridge, index) => {*/}
                    {/*            return <td key={index}>*/}
                    {/*                <input*/}
                    {/*                    disabled={inputDisabled}*/}
                    {/*                    min="0"*/}
                    {/*                    className={styles.beverage}*/}
                    {/*                    name={beveragesTanks[beverageIndex]}*/}
                    {/*                    placeholder="0"*/}
                    {/*                    type="number"*/}
                    {/*                    value={tanks[index][beveragesTanks[beverageIndex]]}*/}
                    {/*                    onChange={(event) => updateTanks(event, index)}/>*/}
                    {/*            </td>*/}
                    {/*        })}*/}
                    {/*        <td>{tanks.reduce(function (accumulator, tanks) {*/}
                    {/*            return accumulator + tanks[beveragesTanks[beverageIndex]];*/}
                    {/*        }, 0)}*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*})}*/}
                    </tbody>
                </table>

                <div className={styles["container-buttons"]}>


                    {/*SP BUTTONS*/}
                    {/*    NIET AKKOORD*/}
                    {/*        Telling moet weer onzichtbaar worden voor SP, wellicht met value true en false*/}
                    {/*        Eedere opgeslagen telling met get request naar INKOM terug.*/}
                    {/*    AKKOORD*/}
                    {/*        data opgeslagen in de backend*/}
                    {/*        data met get request naar totaal tellingen*/}
                    {/*        bonus per mail met pdf de telling*/}


                    <button
                        className={styles["button-formCount"]}
                        type="button"
                        onClick={() => {
                            // setSaved(false);
                            // setInputDisabled(false);
                        }}
                    >
                        Niet Akkoord
                    </button>


                    <button
                        className={styles["button-formCount"]}
                        type="submit">
                        Akkoord
                    </button>
                </div>

            </form>




        </>
    );
}

export default StudentCountForm;


// onInput="validity.valid||(value='');"
// zorgt ervoor dat de ingetypte waarde niet onder de nul kan, geeft error bij aanklikken button