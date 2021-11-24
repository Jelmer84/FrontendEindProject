import React, {useEffect, useState} from "react";
import InputForm from "../../components/InputForm/InputForm";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {
    updateStatuses,
    fetchCustomers,
    registerCar,
    uploadPdf,
    fetchCustomer, fetchInspectedPayed
} from "../../network/network";
import Button from "../../components/Button/Button";
import styles from "./Car.module.css";
import logoGarage from "../../assets/logoGarage.png";

function Car() {
    const [loading, toggleLoading] = useState(false)
    const [carSuccess, toggleCarSuccess] = useState(false)
    const history = useHistory();
    const {handleSubmit, formState: {errors}, register} = useForm()
    const [status, setStatus] = useState(0)
    const [pdfFile, setPdfFile] = useState()
    const [customers, setCustomers] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState(false);
    const [selected, setSelected] = useState(0)
    const [changedStatuses, setChangedStatuses] = useState([])

    useEffect(async () => {
        try {
            const res = await fetchInspectedPayed()
            //setVehicles(res.data)
            await fetchCarCustomers(res.data)
        } catch (e) {
            console.error(e)
        }
        fetchCustomers().then((res) => {
            setCustomers(res.data)
        }).catch(console.error)
    }, [])

    async function onSubmitCar(data) {
        toggleLoading(true)
        data['customer'] = Number(selected);
        data['status'] = String(status)
        data.inspectionDate = new Date(data.inspectionDate)
        try {
            await registerCar(data)
            sendPdf(pdfFile, data.licensePlate)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleCarSuccess(true)
        history.push("/repair")
    }

    async function handleUpdate() {
        try {
            await updateStatuses(changedStatuses)
        } catch (e) {
        }
    }

    async function fetchCarCustomers(data) {
        for (let i = 0; i < data.length; i++) {
            const res = await fetchCustomer(data[i].customerId)
            data[i]['customer'] = res.data
        }
        setVehicles(data)
    }

    async function sendPdf(pdf, licensePlate) {
        try {
            const formData = new FormData()
            formData.append('pdf', pdf)
            formData.append('licensePlate', licensePlate)
            await uploadPdf(formData)
        } catch (e) {
            console.error(e);
        }
    }

    const handleImageChange = (e) => {
        setError(false)
        const selected = e.target.files[0];
        if (selected) {
            setPdfFile(selected)
        } else {
            setError(true);
        }
    };

    return (
        <>
            <h2>Auto beheren</h2>
            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitCar)}>
                <label className={styles.dateLabel}>Datum Keuring</label>
                <InputForm
                    type="date"
                    name="inspectionDate"
                    placeholder="Datum Keuring"
                    fieldRef={register("inspectionDate",
                        {
                            required: {
                                value: true,
                                message: "Datum is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <div className={styles["container"]}>
                    <select
                        className={styles.selectStyle}
                        name="customer"
                        id="customer"
                        defaultValue={"customer"}
                        onChange={(event => {
                            const selectedCustomer = event.target.value
                            setSelected(selectedCustomer)
                        })}
                    >
                        <option value="customer" disabled hidden>Klant</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.id}>{customer.name}</option>))}
                    </select>
                </div>

                <InputForm
                    type="text"
                    name="make"
                    placeholder="Merk"
                    fieldRef={register("make",
                        {
                            required: {
                                value: true,
                                message: "Merk is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="year"
                    placeholder="Bouwjaar"
                    fieldRef={register("year",
                        {
                            required: {
                                value: true,
                                message: "Bouwjaar is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="licensePlate"
                    placeholder="Kenteken"
                    fieldRef={register("licensePlate",
                        {
                            required: {
                                value: true,
                                message: "Kenteken is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                {!imagePreview && (

                    <>
                        <button
                            type="button"
                            className={styles.customButton}
                        >
                            <label
                                htmlFor="carPapers"
                            >
                                Auto Papieren Upload </label>
                        </button>

                        <label className={styles.upload}>
                            <input
                                type="file"
                                accept=".pdf"
                                id="carPapers"
                                onChange={handleImageChange}
                            />
                            <span>Auto papieren Upload</span>
                        </label>
                        {error && <p className={styles.error}>Alleen PDF is toegestaan </p>}
                    </>
                )}

                <div className={styles["dropdown-containerStatus"]}>
                    <select
                        className={styles.selectStyle}
                        name="status"
                        id="status"
                        defaultValue={"status"}
                        onChange={(event => {
                            const selectedStatus = event.target.value
                            setStatus(selectedStatus)
                        })}
                    >
                        <option value="status" disabled hidden>Status Auto</option>
                        <option value="InspectionPlanned">Inspection planned</option>
                    </select>
                </div>

                <Button
                    type="submit"
                    name="Registeren"
                />

                {carSuccess === true &&
                <p>Auto is geregisteerd, je wordt nu door gestuurd naar de keuring pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}
            </form>

            <table border="1">
                <thead>
                <tr>
                    <th><img src={logoGarage} alt="Garage logo"/></th>
                    <th colSpan="9">Auto's</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.bold}>Naam</td>
                    <td className={styles.bold}>Telefoon</td>
                    <td className={styles.bold}>Kenteken</td>
                    <td className={styles.bold}>Status</td>
                    <td className={styles.bold}>Update</td>
                </tr>

                {vehicles.map((vehicle) => (
                    <tr key={vehicle.id}>
                        <td>{vehicle.customer.name}</td>
                        <td>{vehicle.customer.telephone}</td>
                        <td>{vehicle.licensePlate}</td>
                        <td>{vehicle.status}</td>

                        <td>
                            <div>
                                <select
                                    name="status"
                                    id="status"
                                    defaultValue={"status"}
                                    onChange={(event => {
                                        const selectedStatus = event.target.value
                                        const statuses = changedStatuses;
                                        const x = {id: vehicle.id, status: selectedStatus}
                                        for (let i = 0; i < statuses; i++) {
                                            if (statuses[i].id === vehicle.id) {
                                                statuses[i] = x;
                                                setChangedStatuses(statuses)
                                                return;
                                            }
                                        }
                                        statuses.push(x)
                                        setChangedStatuses(statuses)
                                    })}
                                >
                                    <option value="status" disabled hidden>Status Auto</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="AwaitingRepair">Awaiting Repair</option>
                                    <option value="InspectionPlanned">Inspection planned</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

            <Button
                type="button"
                name="Update Status"
                click={handleUpdate}
            />
        </>
    );
}

export default Car




