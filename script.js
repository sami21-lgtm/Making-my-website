// Typing effect
const typingElement = document.getElementById("typing");
const words = ["a Developer 👨‍💻", "a Designer 🎨", "a Creator 🚀"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, charIndex);

  typingElement.textContent = displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, typingSpeed / 2);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300); // pause before typing next word
    }
  }
}

typeEffect();

// Smooth scroll effect for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Reveal sections on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});
