import React from "react";
import "./App.css";
import CenterContent from "./centerContent";
import Introduce from "./introduce";
import PersonalDetails from "./personalDetails";


function AllProfile() {
    return (
        <div>
            <Introduce />
            <div class="flexdiv">
                <div class="lcol lcolsp">
                    <PersonalDetails />
                </div>
                <div class="mcol ">
                    <CenterContent />
                </div>

            </div>
        </div>
    );
}

export default AllProfile;