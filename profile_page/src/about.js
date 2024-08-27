import React, { Component } from 'react'
import "./App.css";

class About extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
        this.calcualteAge = this.calcualteAge.bind(this);
    }

    calcualteAge() {
        let today = new Date().getTime();
        let other_date = new Date(new Date("1995-09-13")).getTime();
        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;
        return years;
    }

    render() {
        return (

            <div>
                <h3 className="btnsp title-txt-sp">About</h3>
                <div className='topsp borderDiv'>
                    <div className="innerDivBorder">
                        <p className="spaceleft topsp">
                            Hajar Amara,{this.calcualteAge()} years old, from Zalafe Village.
                        </p>
                        <p className="spaceleft topsp">
                            Dedicated Software Developer with expertise in Java, SQL, Python, and web technologies.
                        </p>
                        <p className="spaceleft topsp">
                            Seeking a challenging role to contribute to innovative projects.
                            Strong problem-solving, communication, and teamwork skills.
                        </p>
                        <p className="spaceleft topsp">
                            Passionate about community involvement and enjoy volunteering.
                            In my free time, I find solace in capturing nature's beauty.
                        </p>
                    </div>
                </div>
            </div >

        );
    };
}

export default About;