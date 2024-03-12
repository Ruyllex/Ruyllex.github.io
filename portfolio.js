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



document.addEventListener("DOMContentLoaded", function() {
    const textoElemento = document.getElementById("title2");
    const textoCompleto = "Hi, welcome to my ";

    function escribirTexto() {
        const h2Elemento = document.createElement("h2");
        let textoConEfecto = '';
        let index = 0;

        while (textoElemento.firstChild) {
            textoElemento.removeChild(textoElemento.firstChild);
        }

        function agregarLetra() {
            if (index < textoCompleto.length) {
                textoConEfecto += textoCompleto.charAt(index);
                h2Elemento.innerHTML = textoConEfecto;
                index++;
                setTimeout(agregarLetra, 200); 
            } else {
                h2Elemento.innerHTML += "<a style='color: #33ff00;'>Porfolio</a>";
                h2Elemento.classList.add("h2");
                setTimeout(function() {
                    textoElemento.removeChild(h2Elemento);
                    escribirTexto(); 
                }, 5000);
            }
        }

        agregarLetra();

        textoElemento.appendChild(h2Elemento); 
    }
    setTimeout(escribirTexto, 5000);
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