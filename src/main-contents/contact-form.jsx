import React from 'react'
import './contact-form.css'
import TextField from '@mui/material/TextField'

function TextFieldFirstName(){
    return(
        <TextField id="outlined-basic" label="Fornavn" variant="outlined"
                   required="true"
        sx={{
            paddingRight: '8px'
        }}/>
    )
}

function TextFieldSurName(){
    return(
        <TextField id="outlined-basic" label="Etternavn" variant="outlined"
                   required="true"
        sx={{
            paddingLeft: '8px'
        }}/>
    )
}

const TextFieldSurNamed  = () => {

};

function TextFieldEmail(){
    return(
        <TextField id="outlined-basic" label="E-post" variant="outlined"
                   required="true"
        sx={{
            width: '462px'
        }}/>
    )
}

function InputMessage(){
    return(
        <TextField id="outlined-basic" label="Melding" variant="outlined"
                   required="true"
            multiline="true" minRows="10" sx={{
                width: '462px'
        }}/>
    )
}

export default function ContactForm(){
    return(

        <div className="contact-wrapper">

            <div className="contact-container">
                <h1 className="contact-header">Kontakt meg da vel!</h1>
                <p className="contact-paragraph">Send inn en form så kommer jeg
                tilbake til deg så fort jeg har mulighet!</p>
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
            </div>

            <div className="contact-container-hidden">
                <h1 className="contact-header">Kontakt meg da vel!</h1>
                <p className="contact-paragraph">Send inn en form så kommer jeg
                    tilbake til deg så fort jeg har mulighet!</p>
            </div>

        </div>
    )
}