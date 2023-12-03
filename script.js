function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "pushpanathmr@gmail.com",
    Password: "305F5FBF0687248026BE1D290F2B5F728B3C",
    To: "pushpanathmr@gmail.com",
    From: "pushpanathmr@gmail.com",
    Subject: "New Contact Form Enquiry",
    ReplyFrom: document.getElementById("email").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>" +
      "E-mail: " +
      document.getElementById("email").value +
      "<br>" +
      "Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
