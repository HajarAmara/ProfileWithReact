import React from "react";
import "./App.css";

function Education() {
    return (
        <div>
            <h3 className="btnsp title-txt-sp">Education</h3>
            <div className='topsp borderDiv'>
                <p className="btnsp innerDivBorder">
                    <p className="btnsp ptitle"> Information Systems at University of Haifa:</p>
                    Courses:
                    <p className="spaceleft"> Introduction to computer science(C), OOP(JAVA),
                        software engineering Basics of client-side programming.
                    </p>
                    Projects:
                    <p className="spaceleft">
                        Graduation Project: developed a home food sales website. technologies that used java, HTML5, CSS, bootstrap4, MySQL, tomcat. link for the project: <a className="linkProj" href="https://github.com/HajarAmara/zakifood.github.io" >github link</a>
                    </p>
                </p>
            </div>
        </div>
    );
}

export default Education;