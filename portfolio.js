const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) { 
          header.classList.add("shrink");
      } else {
          header.classList.remove("shrink");
      }
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".buttonProject");
  const skillItems = document.querySelectorAll(".skill");
  const skillTitles = document.querySelectorAll(".skilss");

  const toggleVisibilityOnScroll = () => {
      projectItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
              item.classList.add("appear");
          } else {
              item.classList.remove("appear");
          }
      });

      skillItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
              item.classList.add("appear");
          } else {
              item.classList.remove("appear");
          }
      });

      skillTitles.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
              item.classList.add("appear");
          } else {
              item.classList.remove("appear");
          }
      });
  };

  window.addEventListener("scroll", toggleVisibilityOnScroll);
  toggleVisibilityOnScroll(); 
});

// Particles effect
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = {
        x: undefined,
        y: undefined,
        radius: 150
    };

    // Mouse move event
    canvas.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    // Mouse out event
    canvas.addEventListener('mouseout', function() {
        mouse.x = undefined;
        mouse.y = undefined;
    });
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = '#33ff00';
            this.alpha = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            if (mouse.x != undefined) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                
                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx/20;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy/20;
                    }
                }
            } else {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(51, 255, 0, ${this.alpha})`;
            ctx.fill();
        }
    }
    
    // Create particles
    function init() {
        particles = [];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
});
