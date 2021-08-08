import React, {useState} from "react";
import styles from "../../components/Totals/Totals.module.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import HeaderCrateBottle from "../../components/Totals/HeaderCrateBottle";
import HeaderAll from "../../components/Totals/HeaderAll";
import BeverageRow from "../../components/Totals/BeverageRow";
import HeaderBetween from "../../components/Totals/HeaderBetween";
import BeverageRowKegs from "../../components/Totals/BeverageRowKegs";
import BeverageRowTank from "../../components/Totals/BeverageRowTank";
import HeaderInfo from "../../components/Totals/HeaderInfo";
import InfoRow from "../../components/Totals/InfoRow";
import calculateAll from '../../helpers/calculateAll/calculateAll';
import DropdownEvents from "../../components/DropdownEvents/DropdownEvents";
import DropdownStudentParty from "../../components/dropdowncount/studentpartydropdown/DropdownStudentParty";
import {deleteAllInventory, getAdminTotal} from "../../network/network";
import Button from "../../components/Button/Button";

function Totals() {
    const [tableValues, setTableValues] = useState({
        cratesBottles: [],
        kegs: [],
        tanks: {},
        totalCratesBottlesDrinks: 0,
        totalCratesBottlesCoins: 0,
        totalKegsDrinks: 0,
        totalKegsCoins: 0,
        allCountedDrinks: 0,
        allCountedCoins: 0,
        alcoholicCoins: 0,
        differenceCoins: 0,
        differenceEuro: 0,
        percentageAlcohol: 0,
        percentageSoda: 0,
    });

    const [eventId, setEventId] = useState()
    const [selectedStudentParty, setSelectedStudentParty] = useState();
    const [combined, setCombined] = useState({});
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState('Please select event and student party to view records');
    const [hasChanged, setHasChanged] = useState(false)


    // useEffect(async () => {
    //
    //     //await fetchTotal()
    //
    //     // console.log(calculateAll());
    //
    // }, [eventId, selectedStudentParty]);


    async function fetchTotal() {
        console.log(eventId, selectedStudentParty)
        if (eventId && selectedStudentParty) {
            setLoading(true)
            try {
                // const response = await getAdminTotal(eventId.nameEvent,selectedStudentParty.studentParty)
                const response = await getAdminTotal(eventId, selectedStudentParty)
                setCombined(response.data)
                setTableValues(calculateAll(response.data));
                setMessage(undefined)
                setHasChanged(true)

            } catch (e) {
                if (e.response.status == 400) {
                    setMessage(e.response.data.message)
                }
                console.log(e)

            }
            setLoading(false)
        }

    }

    const onEventValueChange = async (value) => {
        setEventId(value.nameEvent)
        setHasChanged(false)
    }

    const onStudentValueChange = async (value) => {
        setSelectedStudentParty(value.studentParty)
        setHasChanged(false)
    }

    async function resetEventData() {
        if(window.confirm("Are you sure you want to delete all database data. his action can not be undo")){
             try {
                 const result = await deleteAllInventory()
                 setMessage(result.data.message)
             }catch (e) {
                 console.log(e)
             }
        }

    }

    return (
        <>
            {loading && <p>loading...</p>}

            <div>
                <DropdownEvents
                    // onChange={onChangeEventId}
                    onValueChange={onEventValueChange}
                />
                {/*{eventId}*/}

                <DropdownStudentParty
                    selectedStudentParty={onStudentValueChange}
                />
                {/*{selectedStudentParty}*/}
                <Button click={() => fetchTotal()} name="Fetch"/>


                {!message && hasChanged && <div>
                    <table border="2" id="table-to-xls">
                        <thead>
                        <tr>
                            <th className={styles.text} colSpan="18">Berekeningen Tellingen</th>
                        </tr>
                        <tr>
                            <th className={styles.headerOne} rowSpan="2">Drank / Per krat / Inhoudsmaat</th>
                            <th className={styles.headerOne} colSpan="2">Inhoud ltr</th>
                            <th className={styles.headerOne} colSpan="2">Voortelling</th>
                            <th className={styles.headerOne} colSpan="3">Liters Voor</th>
                            <th className={styles.headerOne} colSpan="2">Natelling</th>
                            <th className={styles.headerOne} colSpan="3">Liters Na</th>
                            <th className={styles.headerOne} colSpan="3">Liters Verschil</th>
                            <th className={styles.headerOne} colSpan="2">Berekening</th>
                        </tr>

                        <tr>
                            <th className={styles.headerTwo}>Per krat</th>
                            <th className={styles.headerTwo}>Per fles</th>
                            <HeaderCrateBottle/>
                            <HeaderCrateBottle/>
                            <HeaderAll/>
                            <HeaderCrateBottle/>
                            <HeaderCrateBottle/>
                            <HeaderAll/>
                            <HeaderCrateBottle/>
                            <HeaderAll/>
                            <th className={styles.headerTwo}>Drankjes</th>
                            <th className={styles.headerTwo}>Munten</th>
                        </tr>
                        </thead>

                        <tbody>
                        {tableValues && <>
                            {tableValues.cratesBottles.map((calculatedCrateBottle) => {
                                return <BeverageRow {...calculatedCrateBottle} key={calculatedCrateBottle.name}/>
                            })}

                            <HeaderBetween title="Fusten"/>
                            {tableValues.kegs.map((calculatedKeg) => {
                                return <BeverageRowKegs {...calculatedKeg} key={calculatedKeg.name}/>
                            })}
                            <HeaderBetween title="Tankbier"/>
                            <BeverageRowTank {...tableValues.tanks} key={tableValues.tanks.name}/>

                            <HeaderInfo/>


                            <InfoRow
                                titleOne="Totaal aantal Drankjes"
                                titleTwo="Verschil in Euro's"
                                titleThree="Weekdag"


                                // TOTAAL DRANKJES
                                calculationOne={tableValues.allCountedDrinks.toFixed(0)}

                                // VERSCHIL IN EURO
                                calculationTwo={(tableValues.differenceCoins*1.90).toFixed(0)}

                                // calculationTwo={tableValues.differenceCoins.toFixed(0)}

                                //Weekday
                                calculationThree={combined.weekday}


                            />

                            <InfoRow
                                titleOne="Verwachte Munten"
                                titleTwo="Tapverlies S.P."
                                titleThree="Event"

                                // HIER VERWACHTE MUNTEN IN VERWERKEN
                                calculationOne={tableValues.allCountedCoins.toFixed(0)}

                                // TAPVERLIES SP = VERSCHIL IN EURO'S * 2/3'
                                calculationTwo={(tableValues.differenceEuro * 2/3).toFixed(0)}
                                calculationThree={combined.event}
                            />

                            <InfoRow
                                titleOne="Ingeleverde Munten"
                                titleTwo="% Alcohol"
                                titleThree="Studentenpartij"
                                //calculationOne={'40'}
                                calculationOne={Number(combined.after === undefined ? 0 : combined.after.totalCoins.Coins)}
                                calculationTwo={tableValues.percentageAlcohol}
                                calculationThree={combined.studentParty}
                            />

                            <InfoRow
                                titleOne="Verschil in Munten"
                                titleTwo="% Fris"

                                //HIER VERSCHIL MUNTEN IN VERWERKEN
                                calculationOne={(tableValues.differenceCoins).toFixed(0)}
                                calculationTwo={tableValues.percentageSoda}
                            />

                            <tr>
                                <th className={styles.headerThree} colSpan={18}>Opmerkingen INKOM</th>
                            </tr>

                            <tr>
                                <td colSpan={18}>{combined.organisationRemarks}</td>
                            </tr>

                            <tr>
                                <th className={styles.headerThree} colSpan={18}>Opmerkingen Studentpartijen</th>
                            </tr>

                            <tr>
                                <td colSpan={18}>{combined.studentPartyRemarks}</td>
                            </tr>

                        </>
                        }
                        </tbody>
                    </table>

                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Download as Excel"/>
                </div>}
            </div>
            {message && <p>{message}</p>}

            <Button
                className={styles.button}
                click={()=>resetEventData()}
                name="Reset Database"
            />

        </>
    );
}

export default Totals;



