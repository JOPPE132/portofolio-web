export const SendEmail = () => {

    const firstname = document.getElementById("firstname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(email);

    if(firstname.trim() === '' || surname.trim() === '' ||
        email.trim() === '' || message.trim() === '' ||
        !isValidEmail){
        alert("Det er feil i utfyllingsformen. Sørg for at alle feltene er fylt ut, og at " +
            "e-post adressen er gyldig.");
    } else{
        const params = {
            firstname,
            surname,
            email,
            message
        }
        const serviceId = "service_w17c60q";
        const templateId = "template_dg6bov3";

        emailjs.send(serviceId, templateId, params);

        document.getElementById("firstname").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
    }
}

