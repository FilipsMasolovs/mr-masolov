import "./skills.css";
import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JS from "./assets/js.png";
import REACT from "./assets/react.png";
import GITHUB from "./assets/github.png";
import SKETCH from "./assets/sketch.png";
import WP from "./assets/wp.png";
import GITLAB from "./assets/gitlab.png";
import VUE from "./assets/vue.png";
import SASS from "./assets/sass.png";
import LESS from "./assets/less.png";
import POSTCSS from "./assets/postcss.png";
import BROWSERSTACK from "./assets/browserstack.png";
import NODE from "./assets/node.png";
import EXPRESS from "./assets/express.png";
import React from "react";

export default class Skills extends React.Component {
    render() {
        return (
            <>
                <div className="mr-masolov-section-heading" id="skills">
                    <div className="mr-masolov-section-heading-inner">
                        <h2>Skills</h2><span>| Things I’m good at & comfortable with</span>
                    </div>
                </div>
                <div className="mr-masolov-skills">
                    <div className="mr-masolov-skills--group">
                        <div className="mr-masolov-skills--group-unit">
                            <h3>FRONTEND</h3>
                            <div className="mr-masolov-skills--logos">
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={HTML} alt="HTML5" title="HTML5"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={CSS} alt="CSS3" title="CSS3"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={JS} alt="JavaScript" title="JavaScript"/>
                                </div>
                            </div>
                        </div>
                        <div className="mr-masolov-skills--group-unit">
                            <h3>FRONTEND FRAMEWORKS</h3>
                            <div className="mr-masolov-skills--logos">
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={REACT} alt="React.JS" title="React.JS"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={VUE} alt="Vue.JS" title="Vue.JS"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={SASS} alt="Sass" title="Sass"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={LESS} alt="Less" title="Less"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={POSTCSS} alt="PostCSS" title="PostCSS"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-masolov-skills--group">
                        <div className="mr-masolov-skills--group-unit">
                            <h3>BACKEND</h3>
                            <div className="mr-masolov-skills--logos">
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={NODE} alt="Node.JS" title="Node.JS"/>
                                </div>
                            </div>
                        </div>
                        <div className="mr-masolov-skills--group-unit">
                            <h3>BACKEND FRAMEWORKS</h3>
                            <div className="mr-masolov-skills--logos">
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={EXPRESS} alt="Express.JS" title="Express.JS"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-masolov-skills--group">
                        <div className="mr-masolov-skills--group-unit">
                            <h3>OTHER</h3>
                            <div className="mr-masolov-skills--logos">
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={GITHUB} alt="GitHub" title="GitHub"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={GITLAB} alt="GitLab" title="GitLab"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={SKETCH} alt="Sketch" title="Sketch"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={WP} alt="WordPress" title="WordPress"/>
                                </div>
                                <div className="mr-masolov-skills--skill">
                                    <div className="mr-masolov-skills--skill-level">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star "></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <img src={BROWSERSTACK} alt="BrowserStack" title="BrowserStack"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
