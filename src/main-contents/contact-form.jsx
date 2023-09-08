import React from 'react'
import './contact-form.css'
import TextField from '@mui/material/TextField'
import {Button} from "@mui/material";
import {SendEmail} from "../emailService.js";
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

const TextFieldFirstName = () => {
    return(
        <TextField id="firstname" label="Fornavn" type="text" variant="outlined"
                   required="true"
                   sx={{
                       paddingRight: '8px'
                   }}

        InputProps={{
            style: {
                fontSize: '20px'
            }
        }}/>
    )
}


const TextFieldSurName  = () => {
    return(
        <TextField id="surname" label="Etternavn" type="text" variant="outlined"
                   required="true"
                   sx={{
                       paddingLeft: '8px'
                   }}
        InputProps={{
            style: {
                fontSize: '20px'
            }
        }}/>
    )
};

const TextFieldEmail = () => {
    return(
        <TextField id="email" label="E-post" variant="outlined"
                   required="true"
                   sx={{
                       width: '560px'
                   }}
        InputProps={{
            style: {
                fontSize: '20px'
            }
        }}/>
    )
};

const InputMessage = () => {
    return(
        <TextField id="message" label="Melding" type="text" variant="outlined"
                   required="true"
                   multiline="true" minRows="8" sx={{
            width: '560px'
        }}

        InputProps={{
            style: {
                fontSize: '20px'
            }
        }}/>
    )
}

export default function ContactForm(){
    return(

        <div id="contact-wrapper">

            <div className="contact-container">
                <h1 className="contact-header">Kontakt meg via formen</h1>
                <p className="contact-paragraph">Send inn en form så kommer jeg
                tilbake til deg så fort jeg har mulighet.</p>
            </div>



            <div className="form-container">
                <div className="first-surname-container">
                    <TextFieldFirstName/>
                    <TextFieldSurName/>
                </div>
                <div className="email-container">
                    <TextFieldEmail/>
                </div>
                <div className="message-container">
                    <InputMessage/>
                </div>
                <div className="button-container">
                    <Button onClick={SendEmail} classname="button-submit" variant="contained" sx={{
                        width: '560px',
                        height: '40px'
                    }}>Send</Button>
                </div>
            </div>

            <div className="contact-container-hidden">
                <h1 className="contact-header">eller nå meg på andre kanaler...</h1>
                <ul className="socials-container">
                    <li><a href="https://github.com/JOPPE132" className="icons"><FaGithub/>Github</a></li>
                    <li><a href="https://www.linkedin.com/in/mikkel-stavelie/" className="icons"><FaLinkedin/>Linkedin</a></li>
                    <li><a href="https://www.facebook.com/stavelie" className="icons"><FaFacebook/>Facebook</a></li>
                </ul>
            </div>

        </div>
    )
}