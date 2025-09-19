
        document.addEventListener('DOMContentLoaded', function() {
            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Revelar elementos ao scroll
            const revealElements = document.querySelectorAll('.hero-content, .about-text, .about-image, .character-card, .gallery-item');
            
            function checkReveal() {
                const windowHeight = window.innerHeight;
                revealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Revelar elementos inicialmente visíveis
            checkReveal();
            
            // Revelar elementos durante o scroll
            window.addEventListener('scroll', checkReveal);
            
            // Revelar conteúdo hero após um breve delay
            setTimeout(function() {
                document.querySelector('.hero-content').classList.add('visible');
            }, 500);
            
            // Smooth scrolling para links de navegação
            document.querySelectorAll('nav a, .cta-button').forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href').startsWith('#')) { 
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        });