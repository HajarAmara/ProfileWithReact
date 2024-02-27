import React from "react";
import "./App.css";
import { FaLocationArrow, FaPhone, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"



function Image1() {
    return (
        <div>
            <img className="btnsp img1" src={require("./image/profilePic2.jpeg")} alt="" />
            <h6 className=" btnsp items-txt"><FaLocationArrow /> <label> Ma’ale Iron, Zalafe </label></h6>
            <h6 className="items-txt"><FaPhone /> <label> +972 0522216445</label></h6>
        </div>
    );
}

export default Image1;