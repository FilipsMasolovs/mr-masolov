import React, {useState} from "react";
import logo from "./assets/logo.png";
import "./header.css";

export default function Header(props) {
    const [isHamburgerActive, handleHamburger] = useState(false);

    const handleHamburgerClick = function (e) {
        e.currentTarget.classList.toggle("active");
        handleHamburger(!isHamburgerActive);
    };

    const handleNavigationClick = function (section) {
        const yOffset = -80;
        const element = document.getElementById(section);
        const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // TODO
        // scrollTo behavior smooth doesn't seem to work on Windows
        window.scrollTo({top: y, behavior: "smooth"});
    };

    let hamburgerContent = null;
    if (isHamburgerActive) {
        hamburgerContent = (
            <div className="mr-masolov-navigation-inner--sandwich-menu-inner">
                <h4 onClick={handleNavigationClick.bind(this, "experience")}>
                    Experience
                </h4>
                <h4 onClick={handleNavigationClick.bind(this, "portfolio")}>
                    Portfolio
                </h4>
                <h4 onClick={handleNavigationClick.bind(this, "skills")}>Skills</h4>
                <h4 onClick={handleNavigationClick.bind(this, "contacts")}>Contact</h4>
            </div>
        );
    }

    return (
        <>
            <div className="mr-masolov-header" id="home">
                <div className="mr-masolov-header-inner">
                    <h3>
                        It's nice to meet you
                        {props.visitorName ? ", " + props.visitorName : ""}.
                    </h3>
                    <h1>My name is Filipp</h1>
                    <h3>I am a frontend developer.</h3>
                    <div className="mr-masolov-header-inner--accent1">
                    <img src="http://ghchart.rshah.org/FilipsMasolovs" style={{width: '100%'}} alt="Name Your Github chart" />
                    </div>
                    <div className="mr-masolov-header-inner--accent2">
                    <img src="http://ghchart.rshah.org/FilipsMasolovs" style={{width: '100%'}} alt="Name Your Github chart" />
                    </div>
                    <div className="mr-masolov-header-inner--accent3">
                    <img src="http://ghchart.rshah.org/FilipsMasolovs" style={{width: '100%'}} alt="Name Your Github chart" />
                    </div>
                </div>
            </div>
            <div className="mr-masolov-navigation">
                <div className="mr-masolov-navigation-inner">
                    <img
                        onClick={handleNavigationClick.bind(this, "home")}
                        className="mr-masolov-navigation-inner--logo"
                        src={logo}
                        alt="Mr. Masolov"
                    />
                    <div
                        className="mr-masolov-navigation-inner--sandwich-menu"
                        onClick={handleHamburgerClick}
                    >
                        <div className="bar1"/>
                        <div className="bar2"/>
                        <div className="bar3"/>
                        {hamburgerContent}
                    </div>
                    <div className="mr-masolov-navigation-inner--menu">
                        <h4 onClick={handleNavigationClick.bind(this, "experience")}>
                            Experience
                        </h4>
                        <h4 onClick={handleNavigationClick.bind(this, "portfolio")}>
                            Portfolio
                        </h4>
                        <h4 onClick={handleNavigationClick.bind(this, "skills")}>Skills</h4>
                        <h4 onClick={handleNavigationClick.bind(this, "contacts")}>
                            Contact
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}
