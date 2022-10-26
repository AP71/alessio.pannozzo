import React from 'react';

const Banner = () => {

    const buttons = [
        {
            nome: "Info",
            link: "#info"
        },
        {
            nome:"Skills",
            link:"#skills"
        },
        {
            nome:"Projects",
            link:"#projects"
        },
        {
            nome:"Contacts",
            link:"#contact"
        },
    ]

    return (
        <div className={"px-10 flex flex-col items-center md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 m-16 w-full md:px-32"}>
            {
                buttons.map((pulsante,i) => (
                    <a key={i} href={pulsante.link} className={"bg-secondary flex-1 w-full text-center rounded-full text-xl md:text-3xl px-4 py-4 hover:animate-bounce font-semibold"}>
                        {pulsante.nome}
                    </a>
                ))
            }
        </div>
    );
};

export default Banner;