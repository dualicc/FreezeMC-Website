/* --- FreezeMC Core Logic --- */

// 1. Initialize Particle Snowfall
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 120, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": false } },
        "line_linked": { "enable": false },
        "move": {
            "enable": true,
            "speed": 1.2,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": false }
        },
        "modes": {
            "bubble": { "distance": 200, "size": 5, "duration": 2, "opacity": 0.8, "speed": 3 }
        }
    },
    "retina_detect": true
});

// 2. Copy IP Functionality
function copyIP() {
    const ipText = document.getElementById('server-ip').innerText;
    const toast = document.getElementById('copy-toast');
    
    navigator.clipboard.writeText(ipText).then(() => {
        // Show success toast
        toast.style.opacity = '1';
        
        // Hide toast after 2 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// 3. Page Reveal & Loader Logic
window.addEventListener("load", () => {
    const loader = document.getElementById('loader');
    const heroContent = document.querySelector('.reveal');

    // Simulate a brief loading time for the "AAA" feel
    setTimeout(() => {
        // Fade out loader
        loader.style.opacity = '0';
        
        setTimeout(() => {
            loader.style.display = 'none';
            // Trigger Hero Animation
            heroContent.classList.add('active');
        }, 700);
    }, 1200);
});

// 4. Scroll Reveal for Features
window.addEventListener("scroll", () => {
    const features = document.querySelectorAll('.feature-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    features.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
