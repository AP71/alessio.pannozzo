import React from 'react';
import logo from "../images/defaultPng.png";

const TopBar = () => {


    return (
        <div className={"bg-primary relative flex h-20 flex-col items-center w-full justify-center drop-shadow-4xl shadow-white"}>
            <img src={logo} alt="" className={"flex-1 h-16 md:h-16 px-1 py-1 items-center justify-center absolute flex"}/>
            {/*<img src={logo2} alt="" className={"flex-1 h-16 md:h-16 px-1 py-1 items-center justify-center absolute flex"}/>*/}
        </div>
    );
};

export default TopBar;