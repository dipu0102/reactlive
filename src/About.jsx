import React from "react";
import web from "../src/images/img1.jpg"
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
const About=()=>{
    return(
        <>
           <Commom name="Welcome to About Page" imgsrc={web} visit="/contact" btn="Contact Now" />
        </>

    )
};
export default About;