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


  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');  
    let index = 0;
    function scrollToNextSection() {
      if (index < sections.length - 1) {  
        index++;
        sections[index].scrollIntoView({ behavior: 'smooth' });
      }
    }
  
  
    if (navigator.userAgent.indexOf("Microsoft IE") > -1) {
      document.addEventListener('mousewheel', function(event) {
        if (event.wheelDeltaY > 0) {
            scrollToNextSection();
         }  
      });
    } else {
      window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
          scrollToNextSection();
        }
      });
    }
  });



  const parallaxImages = document.querySelectorAll('.parallax-image');


window.addEventListener('scroll', () => {

  parallaxImages.forEach(image => {

    const imageTop = image.getBoundingClientRect().top;

    const scrollTop = window.pageYOffset;

    const parallaxAmount = (imageTop - scrollTop) * 0.3;


    image.style.transform = `translateY(${parallaxAmount}px)`;

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