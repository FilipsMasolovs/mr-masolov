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

export default function Skills() {
    return (
        <>
            <div id='skills' className='mr-masolov-section-heading'>
                <div className='mr-masolov-section-heading-inner'>
                    <h2>Skills</h2>
                </div>
            </div>
            <div className='mr-masolov-skills'>
                <img src={HTML} alt='HTML5' />
                <img src={CSS} alt='CSS3' />
                <img src={JS} alt='JavaScript' />
                <img src={REACT} alt='React.JS' />
                <img src={VUE} alt='Vue.JS' />
                <img src={GITHUB} alt='GitHub' />
                <img src={WP} alt='WordPress' />
                <img src={PYTHON} alt='Python' />
                <img src={GITLAB} alt='GitLab' />
                <img src={SKETCH} alt='Sketch' />
            </div>
        </>
    );
}