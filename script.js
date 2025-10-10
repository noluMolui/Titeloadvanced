
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all required fields before sending.");
      return;
    }

    const phone = "27750866829"; // your WhatsApp number (country code, no +)
    const text =
      `Hello, my name is ${name} (${email}).%0A` +
      (subject ? `Subject: ${subject}%0A` : "") +
      `%0A${message}`;

    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  }