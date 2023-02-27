let button = document.querySelector(".btn");
let UL = document.querySelector(".myUL");

// Contact Form
let contactForm = document.querySelector(".contact-form")

window.onload = function () {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault;
        //SERVICE ID + TEMPLATE ID FEHLT !!! KOPIEREN VON EMAIL JS !!!!
        emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", e.target)
            .then(function () {
                alter("HORRAAYYY ✨✨✨✨✔ You sent the Form!!!");
            }, function (error) {
                alert(error);
            });
    });
}

button.addEventListener("click", () => {
    let extractedText = document.querySelector(".form-control").value;
    if (extractedText == "") {
        alert("Empty field not Allowed");
    }
    else {
        // alert(extractedText);
        let TextNode = document.createTextNode(extractedText)
        let listItem = document.createElement("li");
        listItem.appendChild(TextNode);

        listItem.classList.add("noDot");

        UL.appendChild(listItem);

        document.querySelector(".form-control").value = "";
    }
});