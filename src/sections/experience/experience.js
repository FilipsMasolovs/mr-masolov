import './experience.css'

import VC from './assets/VC.png'

export default function Experience() {
    return (
        <>
            <div id='experience' className='mr-masolov-section-heading'>
                <div className='mr-masolov-section-heading-inner'>
                    <h2>Experience</h2>
                </div>
            </div>
            <div className='mr-masolov-experience-block'>
                <div className='mr-masolov-experience'>
                    <h3>Frontend Developer</h3>
                    <span>@ <a href='https://www.ecenta.com/lv/' target='_blank' rel="noreferrer">ECENTA</a></span>
                    <a className='company-logo' href='https://www.ecenta.com/lv/' target='_blank' rel="noreferrer"><svg viewBox="0 0 178.41 35.84"><path d="M26.51 35.49C12.74 37.36.73 31.5 0 22-.41 15.82 4.2 9.8 11.29 5.91a.37.37 0 01.41.62C6.83 10.38 4 15 4.39 19.57c.64 9.2 13.78 15.25 29.9 13.25a.37.37 0 01.45.27.37.37 0 01-.27.45 37.5 37.5 0 01-8 2"></path><path d="M11.84 0c10.43.61 18.89 7 18.75 14.52-.1 4.93-3.93 9-9.49 11a.19.19 0 01-.27-.1.2.2 0 01.1-.27c3.92-2.3 6.33-5.56 6.41-9.28C27.48 8.43 18 1.65 5.79.83a.19.19 0 01-.2-.2.19.19 0 01.2-.2A26.16 26.16 0 0111.85 0"></path><path d="M16 14a2.47 2.47 0 000 5 2.47 2.47 0 000-5zM50.91 18.54h6v-2.71h-6v-1.88h6.57v-2.92h-10l.03 12.4h10.05v-2.89h-6.65v-2zM98.58 18.54h5.95v-2.71h-5.95v-1.88h6.59v-2.92h-10v12.4h10.06v-2.89h-6.65v-2zM76.78 20.54h-.18a3.06 3.06 0 01-2.82-3.3.76.76 0 010-.15 3.07 3.07 0 013-3.12 3.36 3.36 0 012.71 1.45l2.59-2a6.09 6.09 0 00-5.26-2.59h-.24a6.37 6.37 0 00-6.29 6.44 6.53 6.53 0 0011.88 3.61L79.61 19a3.38 3.38 0 01-2.83 1.54zM126.81 17.58l-5.11-6.55h-3.2l.02 12.41h3.4v-6.8l5.28 6.8h3.01V11.03h-3.4v6.55zM143.22 14.03h3.72v9.4h3.44v-9.4h3.71v-3h-10.87v3zM173.13 11h-3.32l-5.28 12.48h3.61l.89-2.21h4.8l.9 2.21h3.68zm-.32 7.6H170l1.44-3.6 1.38 3.52z"></path></svg></a>
                    <span>June 2021 - Onward</span>
                </div>
                <div className='mr-masolov-experience'>
                    <h3>Frontend Developer</h3>
                    <span>@ <a href='https://www.visualcomposer.com' target='_blank' rel="noreferrer">Visual Composer</a></span>
                    <a className='company-logo' href='https://www.visualcomposer.com' target='_blank' rel="noreferrer"><img src={VC} alt='VisualComposer' /></a>
                    <span>August 2019 - June 2021</span>
                </div>
            </div>
        </>
    );
}