import React, {useEffect, useState} from "react";
import InputForm from "../../components/InputForm/InputForm";
import styles from "../customer/Customer.module.css";
import {useForm} from "react-hook-form";
import {deleteItem, fetchItems, registerItem} from "../../network/network";
import Button from "../../components/Button/Button";
import logoGarage from "../../assets/logoGarage.png";

function Item() {
    const {handleSubmit, formState: {errors}, register} = useForm()
    const [loading, toggleLoading] = useState(false)
    const [itemSuccess, toggleItemSuccess] = useState(false)
    const [items, setItems] = useState([])

    async function onSubmitItem(data) {
        toggleLoading(true)
        console.log(data)
        try {
            await registerItem(data)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
        toggleItemSuccess(true)
    }

    useEffect(async () => {
        fetchItems().then((res) => {
            setItems(res.data)
        }).catch(console.error)
    }, [])

    async function handleDelete(item) {
        if (window.confirm("Weet je absoluut zeker dit item wilt verwijderen. Deze handeling kan niet ongedaan worden gemaakt! Ga allen verder als je absoluut zeker bent.")) {
            try {
                const idx = items.findIndex(e => item.id === e.id)
                items.splice(idx, 1)
                await deleteItem(item.id)
                setItems([...items])
            } catch (e) {
            }
        }
    }

    return (
        <>
            <h2>Items Aanmaken</h2>
            <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmitItem)}>
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
                    name="buyPrice"
                    placeholder="Inkoop Prijs"
                    fieldRef={register("buyPrice",
                        {
                            required: {
                                value: true,
                                message: "Inkoop prijs is verplicht",
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

                <InputForm
                    type="number"
                    name="quantity"
                    placeholder="Hoeveelheid items"
                    fieldRef={register("quantity",
                        {
                            required: {
                                value: true,
                                message: "Hoeveelheid items  is verplicht",
                            }
                        }
                    )}
                    errors={errors}
                />

                <Button
                    type="submit"
                    name="Registeren"
                />
                {itemSuccess === true &&
                <p>Item is geregisteerd, je wordt nu door gestuurd naar de keuring pagina!</p>}
                {loading === true && <p>"Loading ... "</p>}

            </form>
            <table border="1">
                <thead>
                <tr>
                    <th><img src={logoGarage} alt="Garage logo"/></th>
                    <th colSpan="9">Onderdelen</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td className={styles.bold}>Naam</td>
                    <td className={styles.bold}>Beschrijvig</td>
                    <td className={styles.bold}>Inkoop Prijs</td>
                    <td className={styles.bold}>Verkoop Prijs</td>
                    <td className={styles.bold}>Hoeveelheid</td>
                    <td className={styles.bold}>Delete</td>
                </tr>

                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.buyPrice}</td>
                        <td>{item.sellPrice}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button
                                type="delete"
                                onClick={
                                    () => {
                                        handleDelete(item)
                                    }
                                }
                            >Delete item
                            </button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    );
}

export default Item

