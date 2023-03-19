const one = document.querySelector(".one");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

one.addEventListener('click', ()=>{
  
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    
    one.classList.toggle("toggle");
});



