import "./skills.css";
import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JS from "./assets/js.png";
import REACT from "./assets/react.png";
import PYTHON from "./assets/python.png";
import GITHUB from "./assets/github.png";
import SKETCH from "./assets/sketch.png";
import WP from "./assets/wp.png";
import GITLAB from "./assets/gitlab.png";
import VUE from "./assets/vue.png";
import SASS from "./assets/sass.png";
import LESS from "./assets/less.png";
import POSTCSS from "./assets/postcss.png";
import BROWSERSTACK from "./assets/browserstack.png";
import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <>
        <div className="mr-masolov-section-heading" id="skills">
          <div className="mr-masolov-section-heading-inner">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="mr-masolov-skills">
          <div>
            <h3>Frontend languages I know:</h3>
            <div className="mr-masolov-skills--logos">
              <img src={HTML} alt="HTML5" title="HTML5" />
              <img src={CSS} alt="CSS3" title="CSS3" />
              <img src={JS} alt="JavaScript" title="JavaScript" />
            </div>
          </div>
          <div>
            <h3>CSS preprocessors I am familiar with:</h3>
            <div className="mr-masolov-skills--logos">
              <img src={SASS} alt="Sass" title="Sass" />
              <img src={LESS} alt="Less" title="Less" />
              <img src={POSTCSS} alt="PostCSS" title="PostCSS" />
            </div>
          </div>
          <div>
            <h3>JavaScript frameworks I am familiar with:</h3>
            <div className="mr-masolov-skills--logos">
              <img src={REACT} alt="React.JS" title="React.JS" />
              <img src={VUE} alt="Vue.JS" title="Vue.JS" />
            </div>
          </div>
          <div>
            <h3>Other tools I am comfortable with:</h3>
            <div className="mr-masolov-skills--logos">
              <img src={GITHUB} alt="GitHub" title="GitHub" />
              <img src={GITLAB} alt="GitLab" title="GitLab" />
              <img src={SKETCH} alt="Sketch" title="Sketch" />
              <img src={WP} alt="WordPress" title="WordPress" />
              <img src={PYTHON} alt="Python" title="Python" />
              <img src={BROWSERSTACK} alt="BrowserStack" title="BrowserStack" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
