import React from "react";
import web from "../src/images/img9.jpg"
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
const Home=()=>{
    return(
        <>
           <Commom name="GRow Your Business with " imgsrc={web} visit="/service" btn="Get Started" />
        </>

    )
};
export default Home;