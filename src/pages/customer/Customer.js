import React, {useEffect, useState} from "react";
import InputForm from "../../components/InputForm/InputForm";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {fetchCustomers, registerCustomer} from "../../network/network";
import Button from "../../components/Button/Button";
import styles from "./Customer.module.css"
import logoGarage from "../../assets/logoGarage.png";

function Customer() {
    const [loading, toggleLoading] = useState(false)
    const [customerSuccess, toggleCustomerSuccess] = useState(false)
    const history = useHistory();
    const {handleSubmit, formState: {errors}, register} = useForm()
    const [customers, setCustomers] = useState([])

    async function onSubmitCustomer(data) {
        toggleLoading(true)
        try {
            await registerCustomer(data)
            console.log(data)
        } catch (e) {
            console.error(e)
        }
        toggleCustomerSuccess(true)
        history.push("/car")
    }

    useEffect(async () => {
        await fetchCustomers().then((res)=> {
            console.log({ response: res.data });
            setCustomers(res.data)
        }).catch(console.error)
    }, [])


    return (
        <>
            <h2>Klant aanmaken</h2>

            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitCustomer)}>
                <InputForm
                    type="text"
                    name="name"
                    placeholder="Naam"
                    fieldRef={register("name",
                        {
                            required: {
                                value: true,
                                message: "Naam is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="address"
                    placeholder="Adres"
                    fieldRef={register("address",
                        {
                            required: {
                                value: true,
                                message: "Adres is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="place"
                    placeholder="Plaatsnaam"
                    fieldRef={register("place",
                        {
                            required: {
                                value: true,
                                message: "Plaatsnaam is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="zipcode"
                    placeholder="Postcode"
                    fieldRef={register("zipcode",
                        {
                            required: {
                                value: true,
                                message: "Postcode is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="telephone"
                    placeholder="Telefoon Nummer"
                    fieldRef={register('telephone', {
                            required: {
                                value: true,
                                message: "Telefoon nummer is vereist"
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="text"
                    name="email"
                    placeholder="E-mail adres"
                    fieldRef={register('email', {
                            required: {
                                value: true,
                                message: "E-mail is vereist"
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Vul een correct E-mail adres in"
                            },
                        }
                    )}
                    errors={errors}
                />

                <Button
                    type="submit"
                    name="Registeren"
                />
                {customerSuccess === true &&
                <p>Klant is geregisteerd, je wordt nu door gestuurd naar de keuring pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}
            </form>

            <table border="1">
                <thead>
                <tr>
                    <th><img src={logoGarage} alt="Garage logo"/></th>
                    <th colSpan="9">Klanten</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.bold}>Naam</td>
                    <td className={styles.bold}>Adres</td>
                    <td className={styles.bold}>Plaats</td>
                    <td className={styles.bold}>Postcode</td>
                    <td className={styles.bold}>Email</td>
                    <td className={styles.bold}>Telefoon</td>
                </tr>

                {customers && customers.map((customer) => {
                        console.log( {customer})
                        return (<tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.place}</td>
                            <td>{customer.zipcode}</td>
                            <td>{customer.email}</td>
                            <td>{customer.telephone}</td>

                            {customer.vehicles && customer.vehicles.map(vehicle => (
                                <td key={vehicle.id}>{vehicle.licensePlate}</td>))
                            }
                        </tr>)
                    }
                )}

                </tbody>
            </table>

        </>
    );
}

export default Customer




