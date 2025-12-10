
document.addEventListener('DOMContentLoaded', () => {
    
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');

    
    if (burger && nav) {
        
        // Function-ka furaya/xiraya Menu-ga
        burger.addEventListener('click', () => {
            // 1. Menu-ga soo saar ama qari
            nav.classList.toggle('nav-active');


            burger.classList.toggle('toggle');
        });
    }

    
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    if (burger) {
                        burger.classList.remove('toggle');
                    }
                }
            });
        });
    }

});