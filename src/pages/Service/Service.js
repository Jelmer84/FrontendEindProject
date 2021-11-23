import React, {useEffect, useState} from "react";
import InputForm from "../../components/InputForm/InputForm";
import styles from "../customer/Customer.module.css";
import {useForm} from "react-hook-form";
import {deleteItem, deleteService, fetchServices, registerService} from "../../network/network";
import Button from "../../components/Button/Button";
import logoGarage from "../../assets/logoGarage.png";


function Service() {
    const {handleSubmit, formState: {errors}, register} = useForm()
    const [loading, toggleLoading] = useState(false)
    const [actSuccess, toggleActSuccess] = useState(false)
    const [services, setServices] = useState([])


    async function onSubmitService(data) {
        toggleLoading(true)
        try {
            const result = await registerService(data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleActSuccess(true)
        // history.push("/login")
    }

    useEffect(async () => {
        fetchServices().then((res) => {
            setServices(res.data)
            console.log(res.data)
        }).catch(console.error)
    }, [])

    async function handleDelete() {
        if (window.confirm("Weet je absoluut zeker deze service wilt verwijderen. Deze handeling kan niet ongedaan worden gemaakt! Ga allen verder als je absoluut zeker bent.")) {
            try {
                await deleteService()

            } catch (e) {

            }
        }
    }


    return (
        <>
            <h2>Handelingen Aanmaken</h2>
            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitService)}>
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
                    name="description"
                    placeholder="Beschrijving"
                    fieldRef={register("description",
                        {
                            required: {
                                value: true,
                                message: "Beschrijving is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <InputForm
                    type="number"
                    name="sellPrice"
                    placeholder="Verkoop Prijs"
                    fieldRef={register("sellPrice",
                        {
                            required: {
                                value: true,
                                message: "Verkoop Prijs is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <Button
                    type="submit"
                    name="Registeren"
                />
                {actSuccess === true &&
                <p>Handeling is geregisteerd</p>}
                {loading === true && <p>"Loading ... "</p>}


            </form>

            <table border="1">
                <thead>
                <tr>
                    <th><img src={logoGarage} alt="Garage logo"/></th>
                    <th colSpan="9">Service</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td className={styles.bold}>Naam</td>
                    <td className={styles.bold}>Beschrijvig</td>
                    <td className={styles.bold}>Verkoop Prijs</td>
                    <td className={styles.bold}>Delete</td>
                </tr>

                {services.map((service) => (
                    <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>{service.description}</td>
                        <td>{service.sellPrice}</td>
                        <td>
                            <button
                                type="delete"
                                onClick={handleDelete}
                            >Delete service</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

        </>
    );
}

export default Service

