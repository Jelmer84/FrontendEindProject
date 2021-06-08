import React from "react";
import styles from "./Admin.module.css"
import DropdownAdmin from "../../components/adminDropdown/DropdownAdmin";

function AdminPage() {

    return (
        <>
            <div className={styles.container}>
            <DropdownAdmin/>

            <div>HELLO ADMIN!!!</div>
            </div>


            <p><strong>ILVA JIJ BENT DE ALLERLEUKSTE, JE KAN HET!!!</strong></p>
            <p><strong>XXXJES</strong></p>
        </>
    )
}

export default AdminPage


