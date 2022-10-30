import React from 'react';
import logo from '../images/4517dm.jpg';
const Avatar = () => {
    return (
        <div className={"flex flex-col sm:flex-row w-full items-center justify-evenly "}>
            <div className={"bg-secondary rounded-full items-center justify-center"}>
                <img src={logo} alt="" className={"flex object-cover h-40 w-40 md:h-64 md:w-64 rounded-full m-1"}/>
            </div>
            <div className={"flex text-3xl "}>
                I'm located in Fondi, Italy <br/>
                I'm a computer science student at Sapienza University of Rome.<br/>
            </div>
        </div>
    )
};

export default Avatar;