function sendMail(contactForm) {
    emailjs.send("service_8oalq1f","template_qylrnc3", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "phone_number": contactForm.phone.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("success-popup").style.display = "block";
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}