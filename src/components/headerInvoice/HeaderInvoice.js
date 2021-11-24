import React from "react";
import styles from "./HeaderInvoice.module.css"

function HeaderInvoice({percentage, description}) {

    return (
        <tr className={styles.bold}>
            <td>{description}</td>
            <td>Quantity</td>
            <td>Price ex</td>
            <td>Taxes {percentage}</td>
            <td>Price Total</td>
        </tr>
    );
}

export default HeaderInvoice