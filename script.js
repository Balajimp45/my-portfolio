document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in-section");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".containerr");
    container.classList.add("is-visible");
});
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  let currentSection = "";

  sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (pageYOffset >= sectionTop) {
          currentSection = section.getAttribute("id");
      }
  });

  navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
      }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const aboutMeText = document.getElementById('about-me-text');
  const words = aboutMeText.innerText.split(' ');
  
  aboutMeText.innerHTML = '';  // Clear the original text
  
  words.forEach((word, index) => {
      const span = document.createElement('span');
      span.classList.add('word');
      span.innerText = word;  // Add the word without extra space
      
      aboutMeText.appendChild(span);
      
      // Append a space after each word
      const space = document.createTextNode(' ');
      aboutMeText.appendChild(space);
      
      setTimeout(() => {
          span.classList.add('show');
      }, index * 200);  // Adjust timing for delay between words
  });
});
//download button
document.querySelector(".download-btn").addEventListener("click", function() {
  this.classList.add("animate");
  setTimeout(() => {
    this.classList.remove("animate");
  }, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
  const animatedSections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
          }
      });
  });

  animatedSections.forEach(section => {
      observer.observe(section);
  });
});
// Dark Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeSwitch.checked = true;
}


//send messaage
const form = document.querySelector('form');
const submitButton = document.querySelector('.btn-primary');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission for now

    // Disable the button and show loading animation
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    // Simulate form submission process
    setTimeout(() => {
        // Show success message
        const successMessage = document.getElementById('form-success-message');
        successMessage.classList.remove('d-none');

        // Reset the form and button after submission
        form.reset();
        submitButton.classList.remove('loading');
        submitButton.disabled = false; // Re-enable the button
    }, 2000); // Simulate a 2-second submission process
});




//education

document.addEventListener("DOMContentLoaded", function() {
  const leftItems = document.querySelectorAll('.education-left');
  const rightItems = document.querySelectorAll('.education-right');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
          }
      });
  });

  leftItems.forEach(item => {
      observer.observe(item);
  });

  rightItems.forEach(item => {
      observer.observe(item);
  });
});

