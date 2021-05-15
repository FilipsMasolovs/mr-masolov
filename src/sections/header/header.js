import logo from './assets/logo.png'
import './header.css'

export default function Header() {
    const handleNavigationClick = function(section) {
        const yOffset = -84;
        const element = document.getElementById(section);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return (
        <>
            <div className='mr-masolov-navigation'>
                <div className='mr-masolov-navigation-inner'>
                    <img onClick={handleNavigationClick.bind(this, 'home')} className='mr-masolov-navigation-inner--logo' src={logo} alt='Mr. Masolov' />
                    <div className='mr-masolov-navigation-inner--menu'>
                        <span onClick={handleNavigationClick.bind(this, 'experience')}>Experience</span>
                        <span onClick={handleNavigationClick.bind(this, 'skills')}>Skills</span>
                        <span onClick={handleNavigationClick.bind(this, 'portfolio')}>Portfolio</span>
                        <span onClick={handleNavigationClick.bind(this, 'contacts')}>Contacts</span>
                    </div>
                </div>
            </div>
            <div id='home' className='mr-masolov-header'>
                <div className='mr-masolov-header-inner'>
                    <h3>Hello there,</h3>
                    <h1>My name is Filipp</h1>
                    <h3>I am a frontend developer.</h3>
                    <div className='mr-masolov-header-inner--accent1' />
                    <div className='mr-masolov-header-inner--accent2' />
                    <div className='mr-masolov-header-inner--accent3' />
                </div>
            </div>
        </>
    );
}