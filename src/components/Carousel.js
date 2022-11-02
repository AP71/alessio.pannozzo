import React from 'react';

const Carousel = ({titolo, array}) => {

    return (
        <div>
            <div className={"flex items-center justify-center text-center"}>
                <div className={"md:text-4xl text-2xl"}>{titolo}</div>
            </div>
            <div className={"flex items-center justify-center pt-24 md:py-28"}>
                <div className={"slider items-center justify-center"}>
                    {
                        array.map((file,key) => (
                            <span key={key} className={"element flex justify-center items-center"} style={{'--i': file.i, '--l':((360/array.length)+`deg`)}}>
                                        <img className={"image"} src={file.nome} alt="Java"/>
                                    </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Carousel;