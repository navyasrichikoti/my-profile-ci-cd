
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Export function for unit testing in Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { validateEmail };
}

// Contact form functionality (browser only)
if (typeof document !== "undefined") {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const message = document.getElementById("formMessage");

      if (validateEmail(email)) {
        message.textContent =
          "Valid email! Form submitted successfully.";
        message.style.color = "green";
      } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
      }
    });
  }
}
