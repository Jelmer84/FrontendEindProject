import "./App.module.css";
import {Switch, Route} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/homepage/Homepage";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Footer from "../components/footer/Footer";
import BeforeCount from "../pages/beforecount/BeforeCount";
import AfterCount from "../pages/afterCount/AfterCount";
import AdminPage from "../pages/adminPage/AdminPage";
import Totals from "../pages/totals/Totals";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import StudentBeforeCount from "../pages/studentBeforeCount/StudentBeforeCount";
import StudentAfterCount from "../pages/studentAfterCount/StudentAfterCount";
import StudentCoins from "../pages/StudentCoins/StudentCoins";
import Coins from "../pages/Coins/Coins";


function App() {
    return (
        <>
            <Navbar/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <PrivateRoute path="/profile">
                    <Profile/>
                </PrivateRoute>
                <PrivateRoute exact path="/administration">
                    <AdminPage/>
                </PrivateRoute>
                <PrivateRoute path="/before-count">
                    <BeforeCount/>
                </PrivateRoute>
                <PrivateRoute exact path="/after-count">
                    <AfterCount/>
                </PrivateRoute>
                <PrivateRoute path="/coins">
                    <Coins/>
                </PrivateRoute>


                <PrivateRoute exact path="/student-before-count">
                    <StudentBeforeCount/>
                </PrivateRoute>
                <PrivateRoute exact path="/student-after-count">
                    <StudentAfterCount/>
                </PrivateRoute>

                <PrivateRoute exact path="/student-coins">
                    <StudentCoins/>
                </PrivateRoute>

                <PrivateRoute path="/totals">
                    <Totals/>
                </PrivateRoute>

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


