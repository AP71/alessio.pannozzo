import React, {useState} from 'react';
import logoInsta from '../images/instagramCl.png';
import logoGit from '../images/githubCl.png';
import logoLinkedin from '../images/linkedinCl.png';
import logoEmail from '../images/emailCl.png';
import Email from "./Email";

const Contact = () => {
    const [showForm, setShowForm] = useState(false);

    const show = () => {
        setShowForm(!showForm);
    }

    const social = [
                    {
                        logo: logoInsta,
                        nome: "Instagram",
                        link: "https://www.instagram.com/zznnp_71.raw/"
                    },
                    {
                        logo: logoGit,
                        nome: "Github",
                        link: "https://github.com/AP71"
                    },
                    {
                        logo: logoLinkedin,
                        nome: "Linkedin",
                        link: "https://www.linkedin.com/in/alessio-pannozzo-7a9101176/"
                    }];

    return (
        <div className={"w-4/5 h-fit rounded-xl flex justify-center items-center"} onScroll={show}>
            <div className={"flex contact"}>
                {
                    social.map((file, key) => (
                    <a key={key} className={"flex contatto "} href={file.link}>
                        <img alt={""} src={file.logo} className={"w-3/5 h-3/5 md:w-40 md:h-40 text-secondary"}/>
                        <div className={"text-secondary pt-5"}>{file.nome}</div>
                    </a>
                    ))

                }
                <div className={"flex contatto "} onClick={show}>
                    <img alt={""} src={logoEmail} className={"w-3/5 h-3/5 md:w-40 md:h-40 text-secondary"}/>
                    <div className={"text-secondary pt-5"}>Email</div>
                </div>
                {showForm && (
                    <Email f={show}/>
                )
                }
            </div>
        </div>
    );
};

export default Contact;