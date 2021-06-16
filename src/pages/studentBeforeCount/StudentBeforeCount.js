import React from "react";
import styles from "../../components/CountForm/CountForm.module.css";
import StudentCountForm from "../../components/StudentCountForm/StudentCountForm";

function StudentBeforeCount() {

    return (
        <>

            <div>
                <p>Hello Student Before Count</p>
            </div>

            <StudentCountForm
            nameList="Voor"
            />

        </>
    )
}

export default StudentBeforeCount


