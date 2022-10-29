import React from 'react';
import logoJava from "../images/java.png";
import logoC from "../images/letter-c.png";
import logoPy from "../images/python.png";
import logoJs from "../images/java-script.png";
import logoReact from "../images/react.png";
import logoCSS from "../images/css-3.png";
import logoHTML from "../images/html.png";
import logoTailwind from "../images/tailwind.png";
import logoPh from "../images/adobe-photoshop.png";
import logoLr from "../images/adobe-lightroom.png";
import logoDavinci from "../images/davinci.png";
import logoCura from "../images/cura.png";
import logoGitHub from "../images/github.png";
import Carousel from "./Carousel";


const Skills = () => {

    const languages_and_skills = [
        {
            nome: logoJava,
            i: 1
        },
        {
            nome: logoC,
            i: 2
        },
        {
            nome: logoPy,
            i: 3
        },
        {
            nome: logoJs,
            i: 4
        },
        {
            nome: logoHTML,
            i: 5
        },
        {
            nome: logoCSS,
            i: 6
        },
        {
            nome: logoReact,
            i: 7
        },
        {
            nome: logoTailwind,
            i: 8
        }
    ];

    const other = [
        {
            nome: logoPh,
            i: 1
        },
        {
            nome: logoLr,
            i: 2
        },
        {
            nome: logoDavinci,
            i: 3
        },
        {
            nome: logoCura,
            i: 4
        },
        {
            nome: logoGitHub,
            i: 5
        }
    ];


    return (
            <div className={"w-4/5 min-h-screen rounded-xl flex justify-center items-center bg-primary drop-shadow-4xl shadow-secondary "}>
                <div className={"flex-col items-center justify-center space-y-20"}>
                    <Carousel titolo={"Languages and Frameworks"} array={languages_and_skills}/>
                    <Carousel titolo={"Other skills"} array={other}/>
                </div>


            </div>
    );
};

export default Skills;