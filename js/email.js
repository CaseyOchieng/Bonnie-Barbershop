




function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shopbonnie001@gmail.com",
        Password : "FDC64C5293269F0DA3797001F2E34D9FF223",
        To : 'shopbonnie001@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: "+document.getElementById("name").value
        +"<br>Email: "+document.getElementById("email").value
        +"<br>Phone: "+document.getElementById("phone").value
        +"<br>Message: "+document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}
