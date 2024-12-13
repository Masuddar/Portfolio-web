// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky Navigation Menu
  let nav = document.querySelector("nav");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
  
  // Side Navigation Menu
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");
  
  // Open side navigation
  menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
  };
  
  const hideNavMenu = () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  };
  
  // Close side navigation
  cancelBtn.onclick = hideNavMenu;
  
  // Close side navigation when a menu link is clicked
  let navLinks = document.querySelectorAll(".menu li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", hideNavMenu);
  });
  
  // Adding animations on scroll
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll').forEach(elem => {
    observer.observe(elem);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for header
    const text = "Welcome to My Data Science Portfolio";
    let index = 0;
    const speed = 100;
    
    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  
    // Typing effect for description
    const descText = "Discover my projects and skills in data science";
    let descIndex = 0;
  
    function typeWriterDesc() {
      if (descIndex < descText.length) {
        document.getElementById("typing-description").innerHTML += descText.charAt(descIndex);
        descIndex++;
        setTimeout(typeWriterDesc, speed);
      }
    }
    setTimeout(typeWriterDesc, text.length * speed); // Start after header is done
  });


  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('your_service_id', 'your_template_id', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send the message. Please try again.');
      });
  });

  
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

