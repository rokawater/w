// قائمة البرجر
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.getElementById('nav-ul');
    
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-ul a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navUl.classList.remove('active');
        });
    });
    
    // تأثير التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تأثير الظهور عند التمرير
    const fadeElements = document.querySelectorAll('.feature, .about-text, .about-image');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // تعيين الخصائص الأولية
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);
});