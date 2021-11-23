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


// import React from "react";
// import {Switch, Route} from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import HomePage from "../pages/homepage/Homepage";
// import Profile from "../pages/profile/Profile";
// import Register from "../pages/register/Register";
// import Login from "../pages/login/Login";
// import Footer from "../components/footer/Footer";
// import BeforeCount from "../pages/beforecount/BeforeCount";
// import AfterCount from "../pages/afterCount/AfterCount";
// import AllCounts from "../pages/allCounts/AllCounts";
// import Totals from "../pages/totals/Totals";
// import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
// import StudentBeforeCount from "../pages/studentBeforeCount/StudentBeforeCount";
// import StudentAfterCount from "../pages/studentAfterCount/StudentAfterCount";
// import StudentCoins from "../pages/studentCoins/StudentCoins";
// import Coins from "../pages/coins/Coins";
// import MyCounts from "../pages/myCounts/MyCounts";
//
// function App() {
//     return (
//         <>
//             <Navbar/>
//             <Switch>
//                 <Route exact path="/">
//                     <HomePage/>
//                 </Route>
//                 <PrivateRoute path="/profile">
//                     <Profile/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/before-count">
//                     <BeforeCount/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/after-count">
//                     <AfterCount/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/coins">
//                     <Coins/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/my-counts">
//                     <MyCounts/>
//                 </PrivateRoute>
//                 <PrivateRoute exact path="/student-before-count">
//                     <StudentBeforeCount/>
//                 </PrivateRoute>
//                 <PrivateRoute exact path="/student-after-count">
//                     <StudentAfterCount/>
//                 </PrivateRoute>
//                 <PrivateRoute exact path="/student-coins">
//                     <StudentCoins/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/overall-counts">
//                     <AllCounts/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/totals">
//                     <Totals/>
//                 </PrivateRoute>
//                 <PrivateRoute path="/register">
//                     <Register/>
//                 </PrivateRoute>
//                 <Route path="/login">
//                     <Login/>
//                 </Route>
//             </Switch>
//             <Footer/>
//         </>
//     );
// }
//
// export default App;

