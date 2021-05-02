import './App.module.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/homepage/Homepage";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Footer from "../components/footer/Footer";
import BeforeCount from "../pages/beforecount/BeforeCount";

function App() {
    return (
            <>
            <Navbar/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/before-count">
                    <div><BeforeCount/>  </div>
                </Route>

                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>

            <Footer/>
            </>
    );
}

export default App;


