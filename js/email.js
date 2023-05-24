function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "twoy46@gmail.com",
        Password : "password",
        To : 'twoy46@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}