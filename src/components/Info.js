import React from 'react';
import Avatar from "./Avatar";


const Info = () => {
    return (
        <div className={"w-4/5 min-h-screen rounded-xl flex justify-center items-center bg-gradient-to-br from-gray-700 via-primary to-gray-700 bg-opacity-50 drop-shadow-4xl shadow-secondary "}>
            <div className={"flex-row md_flex items-center justify-center space-y-20"}>
                <div className={"flex-1"}/>
                <Avatar class={"flex-1 pb-10"}/>
                <div className={"flex-1 px-10 pb-10"}>
                    «Lorem ipsum dolor sit amet, consectetur adipisci elit,
                    sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam,
                    nisi ut aliquid ex ea commodi consequatur.
                </div>
            </div>
        </div>

    );
};

export default Info;