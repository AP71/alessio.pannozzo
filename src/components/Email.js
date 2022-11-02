import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = ({f}) => {
    const form = useRef();

    (function () {
        emailjs.init(process.env.REACT_APP_USER_ID);
    })();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_SERVICE_ID);
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        })
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <form ref={form} className={"emailForm w-3/6 h-4/6 flex ml-3 px-4 justify-center text-white border-2 border-secondary bg-primary rounded-3xl p-2 flex-col"}>
            <input className={"flex required:border-red-500 bg-secondary p-2 rounded-3xl text-black placeholder-black w-11/12"} type="text" id="name" name="user_name" placeholder={"Name"} />
            <input className={"flex required:border-red-500 bg-secondary p-2 rounded-3xl text-black placeholder-black w-11/12"} type="email" id="email" name="user_email" placeholder={"Email"}/>
            <textarea className={"flex required:border-red-500 bg-secondary p-2 rounded-3xl text-black placeholder-black w-11/12"} id="message" name="message" placeholder={"Message"}/>
            <div className={"flex flex-row items-center justify-evenly w-11/12"}>
                <div className={"flex text-white p-2 w-2/12 border-secondary border-2 rounded-full items-center justify-center"}>
                    <button onClick={f} >Cancel</button>
                </div>
                <div className={"flex text-white p-2 w-2/12 border-secondary border-2 rounded-full items-center justify-center"}>
                    <button onClick={sendEmail}>Send</button>
                </div>
            </div>
        </form>
    );
};

export default Email;