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
                    <p className="innerDivBorder">
                        <p className="spaceleft">
                            Hajar Amara,{this.calcualteAge()} years old, from Zalafe Village.
                            I like to help others and be realted to volunteering groups.
                            As an aspiring professional in the realm of data and technology,
                            I am Motivated junior software automation engineer, Passionate about Software development,
                            looking for my next challenge in the high-tech industry.
                        </p>
                    </p>
                    <p className='spaceleft topsp innerDivBorder'>
                        Self-learning, teamwork, time management, strong problem-solving abilities, and high communication skills.
                    </p>
                    < p className='spaceleft topsp innerDivBorder'>
                        Deep knowledge with: Java, SQL, Python, HTML/CSS, Selenium.
                    </p>
                </div>
            </div >

        );
    };
}

export default About;