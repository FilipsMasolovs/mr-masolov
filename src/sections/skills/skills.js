import './skills.css'

import HTML from './assets/html.png'
import CSS from './assets/css.png'
import JS from './assets/js.png'
import REACT from './assets/react.png'
import PYTHON from './assets/python.png'
import GITHUB from './assets/github.png'
import SKETCH from './assets/sketch.png'
import WP from './assets/wp.png'
import GITLAB from './assets/gitlab.png'
import VUE from './assets/vue.png'

import React from 'react';

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          skill: 'html'
        };
      }
    
      render() {
          const data = {
            html: 'The <strong>HyperText Markup Language</strong>, or <strong>HTML</strong> is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
            css: '<strong>Cascading Style Sheets</strong>, or <strong>CSS</strong> is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
            js: '<strong>JavaScript</strong>, often abbreviated as <strong>JS</strong>, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
            react: '<strong>React</strong> (also known as <strong>React.js</strong> or <strong>ReactJS</strong>) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
            vue: '<strong>Vue.js</strong> (commonly referred to as <strong>Vue</strong>, like "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
            github: '<strong>GitHub, Inc.</strong> is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features.',
            wp: '<strong>WordPress</strong> (<strong>WP, WordPress.org</strong>) is a free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.',
            python: `<strong>Python</strong> is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.`,
            gitlab: '<strong>GitLab</strong> is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features, using an open-source license, developed by GitLab Inc.',
            sketch: '<strong>Sketch</strong> is a vector graphics editor for macOS developed by the Dutch company Sketch B.V. It is primarily used for user interface and user experience design of websites and mobile apps and does not include print design features.'
          }
    return (
        <>
            <div id='skills' className='mr-masolov-section-heading'>
                <div className='mr-masolov-section-heading-inner'>
                    <h2>Skills</h2>
                </div>
            </div>
            <div className='mr-masolov-skills'>
                <img src={HTML} alt='HTML5' onClick={() => this.setState({ skill: 'html' })} />
                <img src={CSS} alt='CSS3' onClick={() => this.setState({ skill: 'css' })} />
                <img src={JS} alt='JavaScript' onClick={() => this.setState({ skill: 'js' })} />
                <img src={REACT} alt='React.JS' onClick={() => this.setState({ skill: 'react' })} />
                <img src={VUE} alt='Vue.JS' onClick={() => this.setState({ skill: 'vue' })} />
                <img src={GITHUB} alt='GitHub' onClick={() => this.setState({ skill: 'github' })} />
                <img src={WP} alt='WordPress' onClick={() => this.setState({ skill: 'wp' })} />
                <img src={PYTHON} alt='Python' onClick={() => this.setState({ skill: 'python' })} />
                <img src={GITLAB} alt='GitLab' onClick={() => this.setState({ skill: 'gitlab' })} />
                <img src={SKETCH} alt='Sketch' onClick={() => this.setState({ skill: 'sketch' })} />
            </div>
            <div className='mr-masolov-skills--description'>
                <p dangerouslySetInnerHTML={{ __html: data[this.state.skill]}} />
            </div>
        </>
    );}
}