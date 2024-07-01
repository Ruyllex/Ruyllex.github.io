const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

function toggleMenu(isOpen) {
    if (isOpen) {
        menu.classList.add("visible");
    } else {
        menu.classList.remove("visible");
    }
}
open.addEventListener("click", () => {
    toggleMenu(true);
});

close.addEventListener("click", () => {
    toggleMenu(false);
});

function redirect(ref){
    window.location.href = ref;
}


document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.menu');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            toggleMenu(false);
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


function checkMediaQuery() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    document.querySelector('.social-buttons').style.display = 'true';
  } else {
      document.querySelector('.social-buttons').style.display = 'none';
  }
}

checkMediaQuery();

window.addEventListener('resize', checkMediaQuery);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => {
  observer.observe(el);
});