import React from 'react';
import Avatar from "./components/Avatar";
import Banner from "./components/Banner";
import {ArrowDownIcon} from "@heroicons/react/20/solid";
import logo from "./images/defaultPng.png";
import logo2 from "./images/extendedPng.png";
import TopBar from "./components/TopBar";
import Carousel from "./components/Carousel";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const HomePage = () => {
    return (
        <div className={"flex-col items-center justify-center"}>
            <TopBar/>
            <div className={"bg-gradient-to-br from-primary via-gray-700 to-primary"}>
                <div id={"general"}
                     className="min-h-screen flex items-center justify-start md:justify-end flex-col pb-24">
                    <Banner/>
                    <a href={"#info"}
                       className={"flex ml-3 items-center px-4 justify-center text-white border-2 border-secondary rounded-full p-2 animate-bounce md:mt-16 mt-8 "}>
                        <ArrowDownIcon className={"h-6 text-secondary "}/>
                        Read More
                    </a>
                </div>
                <div className={"text-secondary font-semibold text-3xl"}>
                    <div id={"info"} className="min-h-screen flex items-center justify-center flex-col py-28">
                        <Info />
                    </div>
                    <div id={"skills"} className="min-h-screen flex items-center justify-center flex-col py-28">
                        <Carousel/>
                    </div>
                    <div id={"projects"} className="min-h-screen flex items-center justify-center flex-col py-28 ">
                        <Projects />
                    </div>
                    <div id={"contact"} className="min-h-screen flex items-center justify-center flex-col py-28">
                        <Contact />
                    </div>
                    <div id={"credits"} className="h-8 flex flex-col bg-primary text-white text-lg">
                        Ciao
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HomePage;
