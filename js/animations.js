document.addEventListener("DOMContentLoaded", function() {
    // GSAP Animations
    gsap.from("header", { duration: 0.8, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from("#hero h1", { duration: 1, x: -100, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from("#hero p", { duration: 1, x: 100, opacity: 0, delay: 0.5, ease: "power2.out" });

    // Anime.js animation for the hero section
    const heroAnimation = document.getElementById('hero-animation');
    if (heroAnimation) {
        const ctx = heroAnimation.getContext('2d');
        let cw = heroAnimation.width = window.innerWidth;
        let ch = heroAnimation.height = 300;

        anime({
            duration: Infinity,
            update: () => {
                ctx.clearRect(0, 0, cw, ch);
                ctx.fillStyle = 'rgba(0, 170, 255, 0.1)';
                
                let numberOfParticles = 30;
                for (let i = 0; i < numberOfParticles; i++) {
                    let x = (cw / numberOfParticles) * i;
                    let y = ch / 2 + Math.sin(Date.now() / 1000 + i) * 50;
                    let radius = 2 + Math.sin(Date.now() / 500 + i) * 2;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        });
    }
});
