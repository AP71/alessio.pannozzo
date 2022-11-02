import React from 'react';
import logo from '../images/4517dm.jpg';
const Avatar = () => {
    return (
        <div className={"flex flex-col md:flex-row w-full items-center justify-center pb-20 pt-20 md:px-10"}>
            <div className={"flex bg-secondary rounded-full items-center justify-center"}>
                <img src={logo} alt="" className={"flex object-cover h-40 w-40 md:h-64 md:w-64 rounded-full m-1"}/>
            </div>
            <div className={"flex-1 text-3xl px-10 py-10"}>
                Hi, my name is Alessio, I live in Fondi and I study Computer Science<br/> to Sapienza University of Rome.<br/>
                I am passionate about technology and everything that goes around it.<br/>
                I like exploring and love going to the mountains, especially for skiing.<br/>
            </div>
        </div>
    )
};

export default Avatar;