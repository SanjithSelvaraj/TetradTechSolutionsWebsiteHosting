
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/contactUsFormResponse.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contact-us-form-response-placeholder").innerHTML = data;
        });
});


function submitFunc() {
    document.querySelector(".submit-open-response").classList.toggle("active");
    document.documentElement.classList.toggle('overflow-y-hidden');
  }


