export const SendEmail = () => {
    var params = {
        firstname: document.getElementById("firstname").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceId = "service_w17c60q";
    const templateId = "template_dg6bov3";

    emailjs.send(serviceId, templateId, params);

    document.getElementById("firstname").value = ""
    document.getElementById("surname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
}

