document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const yesBtns = document.querySelectorAll('.yes-btn');
    const noBtns = document.querySelectorAll('.no-btn');
    const noBtnGrow = document.querySelector('.no-btn-grow');
    let currentPage = 0;
    let noBtnGrowClicks = 0;

    const showPage = (pageNumber) => {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageNumber);
        });
        currentPage = pageNumber;
    };

    yesBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                showPage(currentPage + 1);
                if (currentPage === pages.length - 2) { 
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }
            }
        });
    });

    noBtns.forEach(btn => {
        if (!btn.classList.contains('no-btn-grow')) {
            btn.addEventListener('mouseover', () => {
                const maxX = window.innerWidth - btn.offsetWidth;
                const maxY = window.innerHeight - btn.offsetHeight;
                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * maxY);
                
                btn.style.transition = 'left 0.5s ease, top 0.5s ease';
                btn.style.left = `${randomX}px`;
                btn.style.top = `${randomY}px`;
            });
        }
    });

    noBtnGrow.addEventListener('click', () => {
        noBtnGrowClicks++;
        const currentScale = 1 + noBtnGrowClicks * 0.5;
        noBtnGrow.style.transform = `scale(${currentScale})`;
        noBtnGrow.textContent = "You can't say no";
    });

    showPage(0);
});