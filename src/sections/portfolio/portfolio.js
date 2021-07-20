import "./portfolio.css";
import Project from "./components/project";
import KravasParvadajumi from "./assets/kravasparvadajumi.png";
import webskola from "./assets/webskola.png";
import wwcve from "./assets/wwvce.png";

export default function Portfolio() {
    return (
        <>
            <div className="mr-masolov-section-heading" id="portfolio">
                <div className="mr-masolov-section-heading-inner">
                    <h2>Portfolio</h2> | <h2>Projects I’ve developed & proud of</h2>
                </div>
            </div>
            <div className="mr-masolov-projects">
                {/*TODO*/}
                {/*Add another decent project*/}
                <Project
                    title="WWVCE"
                    description="This is a React.js based “Who Wants to Be a Millionaire?” type game, but about Visual Composer."
                    backgroundImage={wwcve}
                    liveSite="https://filipsmasolovs.github.io/who-wants-to-be-game/"
                    gitHub="https://github.com/FilipsMasolovs/who-wants-to-be-game"
                />
                <Project
                    title="WebSkola.lv"
                    description="A website created using React styled-components with the help of storybook. It is stored on a private Bitbucket repository."
                    backgroundImage={webskola}
                    liveSite="https://webskola.lv/lv"
                />
                <Project
                    title="KravasParvadajumi.lv"
                    description="My very first coded website. Basic HTML, CSS and some JS."
                    backgroundImage={KravasParvadajumi}
                    liveSite="http://www.kravasparvadajumi.lv/"
                    gitHub="https://github.com/FilipsMasolovs/grivika-kravas-parvadajumi"
                />
            </div>
        </>
    );
}
