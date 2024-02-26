import React from "react";
import "./App.css";
import { FaLocationArrow, FaPhone, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

function PersonalDetails() {
    return (
        <div className="linksp aLinks" >
            <a href="mailto: hajar.amara.9@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/hajar-amara-193292b3/"><FaLinkedinIn /></a>
            <a href="https://github.com/HajarAmara"><FaGithub /></a>
        </div>
    );
}

export default PersonalDetails;