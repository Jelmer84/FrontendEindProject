import React from "react";
import styles from "./RemarksContainer.module.css"

function RemarksContainer({remarks, toggleRemarks, contentRemarks, setContentRemarks}) {

    return (
        <div>
            <div className={styles["remarks-container"]}>
                <label htmlFor="remarks">
                    Opmerkingen
                    <input
                        checked={remarks}
                        type="checkbox"
                        name="remarks"
                        id="remarks"
                        onChange={(event) => toggleRemarks(event.target.checked)}
                    />
                </label>

                {remarks === true && (
                    <textarea
                        onChange={(event) => setContentRemarks(event.target.value)}
                        value={contentRemarks}
                        name="remarks"
                        id="remarks"
                        cols="60"
                        rows="10"
                        placeholder="Zet hier je opmerkingen, geef bij overheveling aan VAN welke studentenpartij NAAR welke studentenpartij!"
                    />
                )}
            </div>
        </div>
    )
}

export default RemarksContainer


