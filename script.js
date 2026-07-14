// Animated Counters Logic
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
};

// Start counters when section is in view
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.counter').parentElement.parentElement);
