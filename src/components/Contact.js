import React from 'react';
import logoInsta from '../images/instagramCl.png';
import logoGit from '../images/githubCl.png';
import logoLinkedin from '../images/linkedinCl.png';
import logoEmail from '../images/emailCl.png';

const Contact = () => {

    const social = [
                    {
                        logo: logoInsta,
                        nome: "Instagram"
                    },
                    {
                        logo: logoGit,
                        nome: "Github"
                    },
                    {
                        logo: logoLinkedin,
                        nome: "Linkedin"
                    },
                    {
                        logo: logoEmail,
                        nome: "Email"
                    }];

    return (
        <div className={"w-4/5 h-fit rounded-xl flex justify-center items-center"}>
            <div className={"flex contact"}>
                {
                    social.map((file) => (
                    <div className={"flex contatto "}>
                        <img alt={""} src={file.logo} className={"w-3/5 h-3/5 md:w-40 md:h-40 text-secondary"}/>
                        <div className={"text-secondary pt-5"}>{file.nome}</div>

                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;