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
                       marginRight: '8px'
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
                       marginLeft: '8px'
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
            <div class="contact-container-left">
                <h1 className="contact-header">Takk for at du tar kontakt!</h1>
                <p className="contact-paragraph">Send inn et skjema så kommer jeg
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
            <div className="contact-container-right">
                <h1 className="contact-header">eller nå meg via andre kanaler &nbsp;... <br/><br/></h1>
                <div className="socials-container">
                    <p className="icons">Tlf: 48056693</p>
                    <p className="icons">Epost: staveliem@gmail.com</p>
                    <a href="https://www.linkedin.com/in/mikkel-stavelie/" className="icons"><FaLinkedin/>&nbsp;&nbsp;Linkedin</a>
                    <a href="https://www.facebook.com/stavelie" className="icons"><FaFacebook/>&nbsp;&nbsp;Facebook</a>
                </div>
            </div>
        </div>
    )
}