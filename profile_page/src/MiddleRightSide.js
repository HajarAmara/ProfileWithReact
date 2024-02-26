import React, { Component } from 'react'
import "./App.css";
import Education from "./education";
import Experience from "./experience";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './about';
import Projects from './projects';


class MiddleRight extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            showHideAbout: true,
            showHideExp: false,
            showHideEdu: false,
            showHideSkill: false,
            showHideProjects: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        switch (name) {
            case "showHideAbout":
                this.setState({ showHideAbout: true, showHideExp: false, showHideEdu: false, showHideProjects: false });
                break;
            case "showHideExp":
                this.setState({ showHideAbout: false, showHideExp: true, showHideEdu: false, showHideProjects: false });
                break;
            case "showHideEdu":
                this.setState({ showHideAbout: false, showHideExp: false, showHideEdu: true, showHideProjects: false });
                break;
            case "showHideSkill":
                this.setState({ showHideAbout: false, showHideExp: false, showHideEdu: false, showHideProjects: false });
                break;
            case "showHideProjects":
                this.setState({ showHideAbout: false, showHideExp: false, showHideEdu: false, showHideProjects: true });
                break;
            default:
                this.setState({ showHideAbout: true, showHideExp: false, showHideEdu: false, showHideProjects: false });
        }
    }

    render() {

        return (
            <div className='rightside'>
                <div className='row'>
                    <div className="btnsp middlecard">
                        <button onClick={() => this.hideComponent("showHideAbout")}>About</button>
                        <button onClick={() => this.hideComponent("showHideExp")} >Experience</button>
                        <button onClick={() => this.hideComponent("showHideEdu")}>Education</button>
                    </div>
                </div>
                <div className='topsp row' >
                    {this.state.showHideAbout && <About />}
                    {this.state.showHideExp && <Experience />}
                    {this.state.showHideEdu && <Education />}
                </div >
            </div>
        );
    }
}

export default MiddleRight; 