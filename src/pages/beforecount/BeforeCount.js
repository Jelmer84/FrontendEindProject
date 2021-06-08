import React from "react";
import styles from "./BeforeCount.module.css"
import CountForm from "../../components/CountForm/CountForm";

function BeforeCount() {


    return (
        <>
            <div className={styles["before-container"]} >


                <CountForm
                    nameList="Voor"
                />


            </div>
           
        </>
    )
}

export default BeforeCount


