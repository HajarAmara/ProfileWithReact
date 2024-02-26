import React from "react";
import "./App.css";

function Experience() {
    return (
        <div>
            <h3 className="btnsp title-txt-sp">Experience</h3>
            <div className='topsp borderDiv'>
                <div className="btnsp innerDivBorder">

                    <p className="btnsp ptitle">Projects and Training (self- learning and working): </p>
                    <p className="spaceleft">
                        A profile page created with React JS, HTML, CSS, and npm provides a dynamic interface for users to display personal details and engage with a platform.
                        Utilizing React's components, HTML/CSS for layout and styling, and npm for managing dependencies.
                    </p>
                    <p className="ptitle">2020 – 2021: Automation Engineer, Galil Software Ltd. </p>
                    <p className=''>
                        My role was to create automated tests to validate data accuracy, functionality, and UI behavior.
                        Utilizing Python with Selenium, I created tests to check UI behavior and built
                        an algorithm that reads data from Excel files. Additionally, Python and Pytest created tests that validated desktop
                        application elements with JSON files. Furthermore, using Java with Selenium and MongoDB,
                        we created tests to validate the accuracy of the displayed data on the website with the saved data in MongoDB.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;