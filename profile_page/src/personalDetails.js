import React from "react";
import "./App.css";
import { FaLocationArrow, FaPhone, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

function PersonalDetails() {
    return (
        <div className="aLinks" >
            <h6 className="items-txt"><FaLocationArrow /> <label> Ma’ale Iron, Zalafe </label></h6>
            <h6 className="items-txt" ><FaPhone /> <label> +972 0522216445</label></h6>
            <a href="mailto: hajar.amara.9@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/hajar-amara-193292b3/"><FaLinkedinIn /></a>
            <a href="https://github.com/HajarAmara"><FaGithub /></a>
        </div>
    );
}

export default PersonalDetails;