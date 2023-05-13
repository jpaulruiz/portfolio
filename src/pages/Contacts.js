import styled from "styled-components";
import { useState, useRef } from "react";
import "./Contacts.css"
import emailjs from "@emailjs/browser";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const ContactDetail = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [formError, setFormError] = useState('')
    const formErrorColor = useRef(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !subject || !message) {
            formErrorColor.current = true
            setFormError('Please fill out all fields')
            return
        }

        formErrorColor.current = false

        emailjs.sendForm(
            "service_uf18fkd",
            "template_ui6lk1u",
            event.target,
            "BvL17OtVIUJSA9imm")
            .then( () => {
                    setFormError('Email sent.');
                }
            )
            .catch( () => {
                    setFormError('Email not sent.');
                }
            )
        //Clear everything
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setFormError('Sending message . . .');
        setTimeout(() => {
            setFormError('');
        }, 5000);
    }

    return (
        <div className="contact-mailbox">
            {formError && <p style={{ color: `${formErrorColor.current ? 'red' : 'white'}`, fontSize: "0.8rem"}}>{formError}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input className="underline" type="text" name="eName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="eEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="eSubject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea name="eMessage" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">send message</button>
            </form>
        </div>
    )
}

const Contacts = () => {
    return ( 
        <Container>
            <div className="contact-layout">
                <span className="contact-greeting">Hi!</span>
                <span className="contact-message">You can drop a message to my gmail account
                    to get in touch or just fill out the form below.
                </span>
                <span className="contact-email">Email: johnpaulmruiz@gmail.com</span>
                <ContactDetail/>
            </div>
        </Container>
    )
}
 
export default Contacts