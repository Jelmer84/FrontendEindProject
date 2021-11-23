import React, {useEffect, useState} from "react";
import logoGarage from "../../assets/logoGarage.png";
import HeaderInvoice from "../../components/headerInvoice/HeaderInvoice";
import styles from "../../pages/payment/Payment.module.css";
import Button from "../../components/Button/Button";
import {
    deleteCustomer, deleteItem,
    fetchCustomer,
    fetchCustomers,
    fetchInspectedPayed,
    fetchItems,
    fetchServices,
    registerCar,
    updateStatuses
} from "../../network/network";
import {useForm} from "react-hook-form";
import ReactHTMLTableToExcel from "react-html-table-to-excel";


function Payment() {


    const [loading, toggleLoading] = useState(false)
    const [repairSuccess, toggleRepairSuccess] = useState(false)
    const [licencePlate, setLicencePlate] = useState([])
    const [customers, setCustomers] = useState([])
    const [items, setItems] = useState([])
    const [services, setServices] = useState([])
    const [changedStatuses, setChangedStatuses] = useState([])
    const [vehicles, setVehicles] = useState([])


    // useEffect(async () => {
    //     fetchCustomers().then((res) => {
    //         setCustomers(res.data)
    //     }).catch(console.error)
    //
    //     fetchItems().then((res) => {
    //         setItems(res.data)
    //         console.log(res.data)
    //     }).catch(console.error)
    //
    //         fetchServices().then((res) => {
    //             setServices(res.data)
    //         }).catch(console.error)
    // }, [])

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

    async function fetchCarCustomers(data) {
        for (let i = 0; i < data.length; i++) {
            const res = await fetchCustomer(data[i].customerId)
            data[i]['customer'] = res.data
            //delete data[i]['customerId']

        }
        console.log(data)
        setVehicles(data)
    }


    const {handleSubmit, formState: {errors}, register} = useForm()
    const [status, setStatus] = useState([])

    async function onSubmitRepair(data) {
        toggleLoading(true)
        console.log(data)
        data['customer'] = Number(document.getElementById('customer').value);
        try {
            const result = await registerCar(data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleRepairSuccess(true)
        // history.push("/login")
    }

    async function handleUpdate() {

        try {
            await updateStatuses(changedStatuses)
        } catch (e) {

        }
    }

    async function handleDelete() {
        if (window.confirm("Weet je absoluut zeker dit item wilt verwijderen. Deze handeling kan niet ongedaan worden gemaakt! Ga allen verder als je absoluut zeker bent.")) {
            try {
                await deleteCustomer()

            } catch (e) {

            }
        }
    }

    return (
        <>
            <h2>Hello Payment page</h2>
            <h2>Bon aanmaken</h2>

            <p>Couple Car to the invoice</p>
            <p>Charge €45 for inspection</p>
            <p>Couple acts including amounts</p>
            <p>Couple items including amounts </p>
            <p>calculate 6% VAT on acts </p>
            <p>calculate 19% VAT on items </p>
            <p>calculate</p>
            <p>List of Cars with status repaired, canceled, Invoiced</p>


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
                                    <option value="Invoiced">Invoiced</option>
                                    <option value="Payed">Payed</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <button
                                type="delete"
                                onClick={handleDelete}
                            >Delete klant</button>
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


            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitRepair)}>
                <div className={styles["container"]}>
                    <select
                        className={styles.selectStyle}
                        name="licencePlate"
                        id="licencePlate"
                        defaultValue={"licencePlate"}

                        onChange={(event => {
                            const selectedLicencePlate = event.target.value
                            setLicencePlate([selectedLicencePlate])
                        })}
                    >
                        <option value="licencePlate" disabled hidden>Kenteken</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.id}>{customer.name}</option>))}

                    </select>
                </div>


                <Button
                    type="submit"
                    name="Create Invoice"
                />

                {repairSuccess === true &&
                <p>Auto is geregisteerd, je wordt nu door gestuurd naar de keuring pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}
            </form>

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

                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>Naam</td>

                        <td>{customer.name}</td>
                        <td className={styles.empty2}></td>
                        <td>Naam</td>
                        <td>Garage</td>
                    </tr>
                ))}

                <tr>
                    <td>Adres</td>


                    <td>"address"</td>
                    <td className={styles.empty2}></td>
                    <td>Adres</td>
                    <td>Garagedreef 1</td>
                </tr>
                <tr>
                    <td>Plaatsnaam</td>
                    <td>"place"</td>
                    <td className={styles.empty2}></td>
                    <td>Plaatnaam</td>
                    <td>Utrecht</td>
                </tr>
                <tr>
                    <td>Postcode</td>
                    <td>"zip"</td>
                    <td className={styles.empty2}></td>
                    <td>Postcode</td>
                    <td>3991 RR</td>
                </tr>
                <tr>
                    <td>Telefoon nummer</td>
                    <td>"telephone"</td>
                    <td className={styles.empty2}></td>
                    <td>Telefoon nummer</td>
                    <td>030-6351444</td>
                </tr>
                <tr>
                    <td>E-mail adres</td>
                    <td>"email"</td>
                    <td className={styles.empty2}></td>
                    <td>E-mail adres</td>
                    <td>garage@garage.com</td>
                </tr>


                <tr>
                    <td className={styles.empty1}></td>

                </tr>

                <HeaderInvoice percentage="19%" description="Onderdelen"/>

                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.sellPrice}</td>
                        {/*<td>{sellPriceTaxes}</td>*/}
                        {/*<td>({item.sellPrice}</td>*/}
                    </tr>
                ))}

                <tr>
                    <td>"Beschrijving Items"</td>
                    <td>"QTY"</td>
                    <td>"Price ex"</td>
                    <td>"taxes"</td>
                    <td>"Price Total"</td>
                </tr>
                <tr>
                    <td className={styles.empty1}></td>

                </tr>

                <HeaderInvoice percentage="6%" description="Handelingen"/>

                <tr>
                    <td>"Beschrijving Acts"</td>
                    <td>"QTY"</td>
                    <td>"Price ex"</td>
                    <td>"taxes"</td>
                    <td>"Price Total"</td>
                </tr>
                <tr>
                    <td>"Beschrijving Acts"</td>
                    <td>"QTY"</td>
                    <td>"Price ex"</td>
                    <td>"taxes"</td>
                    <td>"Price Total"</td>
                </tr>
                <tr>
                    <td className={styles.empty3}></td>
                    <td className={styles.empty3}></td>
                    <td className={styles.empty3}></td>
                    <td className={styles.bold}>Subtotal</td>
                    <td>"subtotal"</td>
                </tr>
                <tr>
                    <td className={styles.empty3}></td>
                    <td className={styles.empty3}></td>
                    <td className={styles.empty3}></td>
                    <td className={styles.bold}>Taxes</td>
                    <td>"taxes"</td>
                </tr>
                <tr>
                    <td className={styles.empty3}></td>
                    <td className={styles.empty3}></td>
                    <td className={styles.empty3}></td>
                    <td className={styles.bold}>Total</td>
                    <td>"total"</td>
                </tr>


                </tbody>
            </table>

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