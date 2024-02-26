import React from "react";
import "./App.css";

function Skills() {
    return (
        <div className="borderDiv">
            <h3 className="bold">Skills</h3>
            <div >
                <div className="spaceLeft">Agile and Scrum, team player, work well under pressure.</div>
                <div className="innerDivBorder">
                    Knowledge in:
                    <div className="nestedInnerBorder">
                        •	Java, JSP، Python, Pywinauto, pytest, HTML5, CSS, Bootstrap4, Selenium<br />
                        •	Mongodb, SQL, ERD, UML, CLASS DIAGRAM, MVC design pattern.<br />
                        •	Jira, Jenkins, GitHub, Git<br />
                        •	Eclipse, Visual Studio Code, pycharm, microsoft sql server management studio<br />
                    </div>
                </div>

                <div className="innerDivBorder">Familiarity with:</div>
                <div className="nestedInnerBorder">C, C#, JS, PHP, NoSql, JSON React, android, networking.</div>
            </div>
            <br />
        </div>


    );
}

export default Skills;