import React, {useContext, useEffect, useState} from "react";
import {fetchSupervisorSummary} from "../../network/network";
import styles from "./MyCounts.module.css"
import {AuthContext} from "../../context/AuthContext";


function MyCounts() {

    const {user} = useContext(AuthContext)
    const [summary, setSummary] = useState([])
    //const supervisorId = user.id;

    useEffect(() => {
        getSummary()
    }, [])


    async function getSummary() {
        try {
            const response = await fetchSupervisorSummary(user.id);
            const summary = response.data;
            console.log(summary)
            setSummary(summary)
        } catch (e) {
            console.log(e)
        }
    }

    return (


        <>
            <div className={styles["coins-table-container"]}>
                <table border="2">
                    <thead>
                    <tr>
                        <th className={styles.headerOne}>Event Name</th>
                        <th className={styles.headerOne}>Student Party</th>
                        <th className={styles.headerOne}>Stage</th>
                        <th className={styles.headerOne}>Status</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        summary.map((e) => {
                            return (<tr>
                                <td>{e.eventId}</td>
                                <td>{e.studentPartyId}</td>
                                <td>{e.stage.toLowerCase()}</td>
                                <td>{e.status.toLowerCase()}</td>

                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default MyCounts

