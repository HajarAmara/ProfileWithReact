import React, { Component } from 'react'
import "./App.css";
import About from './about';
import Experience from './experience';
import Education from './education';


class CenterContent extends Component {

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

export default CenterContent; 