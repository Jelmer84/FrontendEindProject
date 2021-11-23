import React, {useState} from "react";
import styles from "./RemarksContainer.module.css"

function RemarksContainer() {
    const [contentRemarks, setContentRemarks] = useState()

    return (
        <div>
            <label>Opmerkingen</label>
            <div className={styles["remarks-container"]}>
                    <textarea
                        onChange={(event) => setContentRemarks(event.target.value)}
                        value={contentRemarks}
                        name="remarks"
                        id="remarks"
                        cols="60"
                        rows="10"
                        placeholder="Eventuele opmerkingen"
                    />
            </div>
        </div>
    );
}

export default RemarksContainer


