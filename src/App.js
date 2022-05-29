import React from "react";
import {ToastContainer} from "react-toastify";
import {Routes, Route} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import UsersTodo from "./Pages/UsersTodo";
import Attend from "./Pages/Attend";
import Images from "./Pages/Images";
import MoreUser from "./Components/MoreUser";
import SingIn from "./Pages/Register/singIn";
import SingOut from './Pages/Register/singOut';

const App = () => {
    return (
        <div className={' bg-[#0F172A] h-full h-screen'}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<SingIn/>}/>
                    <Route path={'singOut'} element={<SingOut/>}/>
                    <Route path={'singIn'} element={<SingIn/>}/>
                    <Route path={'participants/:id'} element={<MoreUser/>}/>
                    <Route path={'participants'} element={<UsersTodo/>}/>
                    <Route path={'attend'} element={<Attend/>}/>
                    <Route path={'images'} element={<Images/>}/>
                </Route>
            </Routes>
            <ToastContainer/>
        </div>
    )
}
export default App