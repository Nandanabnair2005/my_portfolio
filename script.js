// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll to Top Button (Optional Feature)
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Basic Email Validation
const emailInput = document.querySelector("input[type='email']");
if (emailInput) {
  emailInput.addEventListener("blur", () => {
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
      emailInput.style.borderColor = "red";
      emailInput.setCustomValidity("Please enter a valid email");
    } else {
      emailInput.style.borderColor = "green";
      emailInput.setCustomValidity("");
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Responsive Navbar Toggle (if you add hamburger menu)
const toggleMenu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (toggleMenu && navbar) {
  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}