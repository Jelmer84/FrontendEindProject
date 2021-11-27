import React, {useEffect, useState} from "react";
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

const usedItems = new Set([]);
const usedServices = new Set([]);

function Repair() {
    const [loading, toggleLoading] = useState(false)
    const [repairSuccess, toggleRepairSuccess] = useState(false)
    const {handleSubmit, formState: {errors}, register} = useForm()
    const [remarks, setRemarks] = useState()
    const [customers, setCustomers] = useState([])
    const [changedStatuses, setChangedStatuses] = useState([])
    const [selected, setSelected] = useState(0)
    const [selectedCustomer, setSelectedCustomer] = useState(0)
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

    async function onSubmitRepair(customer) {
        toggleLoading(true)
        const dataX = {
            licensePlate: selected,
            remarks,
            usedItems: [...usedItems],
            usedServices: [...usedServices]
        }
        try {
            await registerRepair(selectedCustomer.id, dataX)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleRepairSuccess(true)
    }

    async function fetchCarCustomers(data) {
        for (let i = 0; i < data.length; i++) {
            const res = await fetchCustomer(data[i].customerId)
            data[i]['customer'] = res.data
        }
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
            <h2>Reparatie aanmaken</h2>
            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitRepair)}>
                <div className={styles["container"]}>
                    <select
                        className={styles.selectStyle}
                        name="licensePlate"
                        id="licensePlate"
                        defaultValue={"licensePlate"}
                        onChange={(event => {
                                const selectedVehicle = event.target.value
                                setSelected(vehicles[selectedVehicle].licensePlate)
                                setSelectedCustomer(vehicles[selectedVehicle].customer)
                            }
                        )}
                    >
                        <option value="licensePlate" disabled hidden>Kenteken</option>
                        {vehicles.map((vehicle, idx) => (
                            <option key={vehicle.id} value={idx}>{vehicle.licensePlate}</option>))}
                    </select>
                </div>

                <label className={styles["checkbox"]}>Parts</label>
                <div>
                    {items.map((item) => (<div key={item.id}>
                        <label>{item.name}</label>
                        <label> €{item.sellPrice}</label>
                        <input type="checkbox" {...register("checkbox")}
                               onChange={(event => {
                                   const selectedItem = event.target.checked
                                   console.log('Item Block: ', selectedItem)
                                   //setSelectedItem
                                   if (selectedItem) {
                                       usedItems.add(item)
                                   } else {
                                       console.log('Has', usedItems.has(item))
                                       usedItems.delete(item)
                                   }
                               })}/>
                    </div>))}
                </div>

                <label className={styles["checkbox"]}>Handelingen</label>
                <div>
                    {services.map((service) => (<div key={service.id}>
                        <label>{service.name}</label>
                        <label> €{service.sellPrice}</label>
                        <input type="checkbox" {...register("checkbox")}
                               onChange={(event => {
                                   const selectedService = event.target.checked
                                   if (selectedService) {
                                       usedServices.add(service)
                                   } else {
                                       usedServices.delete(service)
                                   }
                               })}/>
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