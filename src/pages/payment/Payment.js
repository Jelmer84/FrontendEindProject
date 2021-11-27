import React, {useEffect, useState} from "react";
import logoGarage from "../../assets/logoGarage.png";
import HeaderInvoice from "../../components/headerInvoice/HeaderInvoice";
import styles from "../../pages/payment/Payment.module.css";
import Button from "../../components/Button/Button";
import {
    deleteCustomer,
    fetchCustomer,
    fetchCustomers, fetchItems,
    fetchRepairedCanceledInvoiced, fetchRepairs, fetchServices,
    updateStatuses
} from "../../network/network";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function Payment() {
    const [loading, toggleLoading] = useState(false)
    const [repairSuccess, toggleRepairSuccess] = useState(false)
    const [customers, setCustomers] = useState([])
    const [items, setItems] = useState([])
    const [changedStatuses, setChangedStatuses] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [selected, setSelected] = useState(0)
    const [selectedCustomer, setSelectedCustomer] = useState(0)
    const [services, setServices] = useState([])
    const [repairs, setRepairs] = useState([])

    useEffect(async () => {
        try {
            const res = await fetchRepairedCanceledInvoiced()
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

    async function fetchCarCustomers(data) {
        for (let i = 0; i < data.length; i++) {
            const res = await fetchCustomer(data[i].customerId)
            data[i]['customer'] = res.data
        }
        setVehicles(data)
        console.log(data)
        console.log(vehicles)
    }

    async function handleUpdate() {
        try {
            await updateStatuses(changedStatuses)
        } catch (e) {
        }
    }

    async function handleDelete(vehicle) {
        if (window.confirm("Weet je absoluut zeker deze klant wilt verwijderen. Deze handeling kan niet ongedaan worden gemaakt! Ga allen verder als je absoluut zeker bent.")) {
            try {
                const idx = vehicles.findIndex(e => vehicle.customer.id === e.customer.id)
                vehicles.splice(idx, 1)
                await deleteCustomer(vehicle.customer.id)
                setCustomers([...vehicles])
            } catch (e) {
            }
        }
    }

    const handleSelectVechile = value => {
        setSelected(vehicles[value].licensePlate)
        setSelectedCustomer(vehicles[value].customer)
        fetchRepairs(vehicles[value].customer.id).then((res) => {
            console.log({response: res.data})
            let total_tax = 2.7;
            let total_price = 45;
            let data = res.data[0] ? res.data[0] : {};
            data.partItemList?.length && data.partItemList.forEach(item => {
                total_tax += (item.sellPrice * 0.19);
                total_price += (item.sellPrice * 1.19);
            })
            data.serviceItems?.length && data.serviceItems.forEach(item => {
                total_tax += (item.sellPrice * 0.19);
                total_price += (item.sellPrice * 1.19);
            })
            setRepairs({...data, grandTotal: {total_tax, total_price}})
        }).catch(console.error)
    }

    return (
        <>
            <table border="1">
                <thead>
                <tr>
                    <th><img src={logoGarage} alt="Garage logo"/></th>
                    <th colSpan="9">Payment status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.bold}>Naam</td>
                    <td className={styles.bold}>Telefoon</td>
                    <td className={styles.bold}>Kenteken</td>
                    <td className={styles.bold}>Status</td>
                    <td className={styles.bold}>Update</td>
                    <td className={styles.bold}>Delete</td>
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
                                    <option value="Invoiced">Invoiced</option>
                                    <option value="Payed">Payed</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <button
                                type="delete"
                                onClick={
                                    () => {
                                        handleDelete(vehicle)
                                    }
                                }
                            >Delete klant
                            </button>
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

            <form className={styles["register-form"]}>
                <div className={styles["container"]}>
                    <select
                        className={styles.selectStyle}
                        name="licensePlate"
                        id="licensePlate"
                        defaultValue={"licensePlate"}

                        onChange={(event) => handleSelectVechile(event.target.value)
                        }
                    >
                        <option value="licensePlate" disabled hidden>Kenteken</option>
                        {vehicles.map((vehicle, idx) => (
                            <option key={vehicle.id} value={idx}>{vehicle.licensePlate}</option>))}
                    </select>
                </div>

                <table border="1" id="table-to-xls">
                    <thead>
                    <tr>
                        <th><img src={logoGarage} alt="Garage logo"/></th>
                        <th colSpan="10">Invoice</th>
                    </tr>
                    <tr className={styles.empty1}></tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td colSpan="2" className={styles.bold}>Invoice To</td>
                        <td className={styles.empty2}></td>
                        <td colSpan="2" className={styles.bold}>Invoice From</td>
                    </tr>

                    <tr>
                        <td>Naam</td>
                        <td>{selectedCustomer.name}</td>
                        <td className={styles.empty2}></td>
                        <td>Naam</td>
                        <td>Garage DIY</td>
                    </tr>

                    <tr>
                        <td>Adres</td>
                        <td>{selectedCustomer.address}</td>
                        <td className={styles.empty2}></td>
                        <td>Adres</td>
                        <td>Garagedreef 1</td>
                    </tr>
                    <tr>
                        <td>Plaatsnaam</td>
                        <td>{selectedCustomer.place}</td>
                        <td className={styles.empty2}></td>
                        <td>Plaatnaam</td>
                        <td>Utrecht</td>
                    </tr>
                    <tr>
                        <td>Postcode</td>
                        <td>{selectedCustomer.zipcode}</td>
                        <td className={styles.empty2}></td>
                        <td>Postcode</td>
                        <td>3991 RR</td>
                    </tr>
                    <tr>
                        <td>Telefoon nummer</td>
                        <td>{selectedCustomer.telephone}</td>
                        <td className={styles.empty2}></td>
                        <td>Telefoon nummer</td>
                        <td>030-6351444</td>
                    </tr>
                    <tr>
                        <td>E-mail adres</td>
                        <td>{selectedCustomer.email}</td>
                        <td className={styles.empty2}></td>
                        <td>E-mail adres</td>
                        <td>garage@garage.com</td>
                    </tr>

                    <tr>
                        <td className={styles.empty1}></td>

                    </tr>

                    <HeaderInvoice percentage="19%" description="Onderdelen"/>

                    {repairs?.partItemList?.length && repairs?.partItemList?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>€{item.sellPrice}</td>
                            <td>€{(item.sellPrice * 0.19)}</td>
                            <td>€{(item.sellPrice * 1.19)}</td>
                        </tr>
                    ))}

                    <tr>
                        <td className={styles.empty1}></td>

                    </tr>
                    <HeaderInvoice percentage="6%" description="Handelingen"/>
                    <tr>
                        <td>Keuring auto</td>
                        <td>1</td>
                        <td>€42.30</td>
                        <td>€2.70</td>
                        <td>€45</td>
                    </tr>

                    {repairs?.serviceItems?.length && repairs?.serviceItems?.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>1</td>
                            <td>€{item.sellPrice}</td>
                            <td>€{item.sellPrice * 0.06}</td>
                            <td>€{item.sellPrice * 1.06}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className={styles.empty3}></td>
                        <td className={styles.empty3}></td>
                        <td className={styles.empty3}></td>
                    </tr>
                    <tr>
                        <td className={styles.empty3}></td>
                        <td className={styles.empty3}></td>
                        <td className={styles.empty3}></td>
                        <td className={styles.bold}>Taxes</td>
                        <td>€{repairs?.grandTotal?.total_tax}</td>
                    </tr>
                    <tr>
                        <td className={styles.empty3}></td>
                        <td className={styles.empty3}></td>
                        <td className={styles.empty3}></td>
                        <td className={styles.bold}>Total</td>
                        <td>€{repairs?.grandTotal?.total_price}</td>
                    </tr>

                    </tbody>
                </table>

                {repairSuccess === true &&
                <p>Auto is geregisteerd, je wordt nu door gestuurd naar de keuring pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}
            </form>

            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as Excel"/>
        </>
    );
}

export default Payment