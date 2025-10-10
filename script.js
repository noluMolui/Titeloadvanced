
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function showEmailAlert() {
    alert("Your email message has been sent. We'll get back to you soon!");
  }

  // Function for WhatsApp button
  function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Make sure all required fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all required fields before sending.");
      return;
    }

    // Your WhatsApp number (with country code, no "+")
    const phone = "27872653231.";

    // Build the WhatsApp message
    const text =
      `Hello, my name is ${name} (${email}).%0A` +
      (subject ? `Subject: ${subject}%0A` : "") +
      `%0A${message}`;

    // Open WhatsApp with the prefilled message
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");

    // Show success message
    alert("Your message has been sent via WhatsApp! We'll get back to you soon.");
  }