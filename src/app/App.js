import React from "react";
import {Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../pages/homepage/Homepage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Footer from "../components/footer/Footer";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Payment from "../pages/payment/Payment";
import Repair from "../pages/Repair/Repair";
import Customer from "../pages/customer/Customer";
import Car from "../pages/car/Car";
import Item from "../pages/items/Item";
import Service from "../pages/Service/Service";

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <PrivateRoute path="/payment">
                    <Payment/>
                </PrivateRoute>

                <PrivateRoute path="/customer">
                    <Customer/>
                </PrivateRoute>

                <PrivateRoute path="/car">
                    <Car/>
                </PrivateRoute>

                <PrivateRoute path="/repair">
                    <Repair/>
                </PrivateRoute>

                <PrivateRoute path="/item">
                    <Item/>
                </PrivateRoute>

                <PrivateRoute path="/service">
                    <Service/>
                </PrivateRoute>

                <PrivateRoute path="/register">
                    <Register/>
                </PrivateRoute>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;