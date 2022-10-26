import React from 'react';
import logo from '../images/logo.jpg'
const Avatar = () => {
    return (
        <div className={"flex flex-col sm:flex-row w-full items-center justify-center "}>
            <div className={"flex bg-secondary rounded-full items-center justify-center"}>
                <img src={logo} alt="" className={"object-cover h-40 w-40 md:h-64 md:w-64 rounded-full m-1"}/>
            </div>
        </div>
    )
};

export default Avatar;