import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {
    fetchCustomer,
    fetchCustomers,
    fetchInspectionPlannedAwaitingRepair,
    fetchItems,
    fetchServices,
    registerRepair,
    updateStatuses,
} from "../../network/network";
import Button from "../../components/Button/Button";
import styles from "../Repair/Repair.module.css";
import logoGarage from "../../assets/logoGarage.png";


function Repair() {
    const [loading, toggleLoading] = useState(false)
    const [repairSuccess, toggleRepairSuccess] = useState(false)
    const history = useHistory();
    const {handleSubmit, formState: {errors}, register} = useForm()
    const [status, setStatus] = useState([])
    const [remarks, setRemarks] = useState()
    const [customers, setCustomers] = useState([])
    const [changedStatuses, setChangedStatuses] = useState([])
    const [selected, setSelected] = useState(0)
    const [vehicles, setVehicles] = useState([])
    const [items, setItems] = useState([])
    const [services, setServices] = useState([])

    useEffect(async () => {
        try {
            const res = await fetchInspectionPlannedAwaitingRepair()
            await fetchCarCustomers(res.data)
        } catch (e) {
            console.error(e)
        }
        fetchCustomers().then((res) => {
            setCustomers(res.data)
        }).catch(console.error)

        fetchItems().then((res) => {
            setItems(res.data)
        }).catch(console.error)

        fetchServices().then((res) => {
            setServices(res.data)
        }).catch(console.error)
    }, [])
    
    async function onSubmitRepair(data) {
        toggleLoading(true)
        data['customer'] = Number(selected);
        data['status'] = String(status)
        data['remarks'] = remarks;
        try {
            const result = await registerRepair(data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleRepairSuccess(true)
        // history.push("/payment")
    }


    async function fetchCarCustomers(data) {
        for (let i = 0; i < data.length; i++) {
            const res = await fetchCustomer(data[i].customerId)
            data[i]['customer'] = res.data
            //delete data[i]['customerId']

        }
        console.log(data)
        setVehicles(data)
    }

    async function handleUpdate() {

        try {
            await updateStatuses(changedStatuses)
        } catch (e) {

        }
    }

    return (
        <>
            <h2>Hello Repair page</h2>
            <h2>Reparatie aanmaken</h2>
            <p>Upon selecting status inspected add €45 to the invoice</p>
            <p>Couple items to repair</p>
            <p>Couple acts to repair</p>
            <p>List of Cars with status Inspection Planned, Awaiting Repair</p>


            <h2>Reparatie aanmaken</h2>
            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitRepair)}>
                <div className={styles["container"]}>
                    <select
                        className={styles.selectStyle}
                        name="licensePlate"
                        id="licensePlate"
                        defaultValue={"licensePlate"}

                        onChange={(event => {
                                const selectedLicensePlate = event.target.value
                                setSelected(selectedLicensePlate)
                            }
                        )}
                    >
                        <option value="licensePlate" disabled hidden>Kenteken</option>
                        {vehicles.map(vehicle => (
                            <option key={vehicle.id} value={vehicle.id}>{vehicle.licensePlate}</option>))}
                    </select>
                </div>

                <label className={styles["checkbox"]}>Parts</label>
                <div>
                    {items.map((item) => (<div key={item.id}>
                        <label>{item.name}</label>
                        <label> €{item.sellPrice}</label>
                        <input type="checkbox" {...register("checkbox")} value={item.name}/>
                    </div>))}
                </div>

                <label className={styles["checkbox"]}>Handelingen</label>
                <div>
                    {services.map((service) => (<div key={service.id}>
                        <label>{service.name}</label>
                        <label> €{service.sellPrice}</label>
                        <input type="checkbox" {...register("checkbox")} value={service.name}/>
                    </div>))}
                </div>

                <label className={styles["checkbox"]}>Opmerkingen
                    <div className={styles["remarks-container"]}>
                    <textarea
                        onChange={(event) => setRemarks(event.target.value)}
                        value={remarks}
                        name="remarks"
                        id="remarks"
                        cols="60"
                        rows="10"
                        placeholder="Eventuele opmerkingen"
                    />
                    </div>
                </label>

                <Button
                    type="submit"
                    name="Opslaan"
                />

                {repairSuccess === true &&
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
                                        //statuses[vehicle.id] = selectedStatus
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
                                        //setStatus(selectedStatus)
                                    })}
                                >
                                    <option value="status" disabled hidden>Status Auto</option>
                                    <option value="Inspected">Inspected</option>
                                    <option value="Repaired">Repaired</option>

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

export default Repair


// <div className={styles["dropdown-containerStatus"]}>
//     <select
// name="status"
// id="status"
// defaultValue={"status"}
// onChange={(event => {
//     const selectedStatus = event.target.value
//     setStatus([selectedStatus])
// })}
// >
// <option value="status" disabled hidden>Status Auto</option>
// <option value="inspection">Inspection planned</option>
// <option value="inspected">Inspected</option>
// <option value="canceled">Canceled </option>
// <option value="awaitingRepair">Awaiting Repair </option>
// <option value="repaired">Repaired</option>
// <option value="invoiced">invoiced</option>
// <option value="payed">Payed</option>
// </select>
// </div>