import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "./dasboard/Dashboard";

const Home = () => {
    return(
        <>
        <Navbar />
        <Dashboard />
        </>
    )
}
export default Home