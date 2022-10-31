import React from 'react';
import Avatar from "./Avatar";


const Info = () => {
    return (
        <div className={"w-4/5 h-fit rounded-xl flex justify-center items-center bg-gradient-to-br from-gray-700 via-primary to-gray-700 bg-opacity-50 drop-shadow-4xl shadow-secondary "}>
            <div className={"flex-row md_flex items-center justify-center space-y-20"}>
                <Avatar />
            </div>
        </div>

    );
};

export default Info;