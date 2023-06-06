const menu = document.querySelectorAll('.dropdown'),
chevron = document.querySelector('.fa-chevron-down'),
header = document.querySelector('header'),
submenu = document.querySelector('.submenu'),
faBars = document.querySelector('.fa-bars'),
menuUl = document.querySelector('header .menu')

menu.forEach(element => {
    element.addEventListener('click', () => {
        element.lastElementChild.classList.toggle('show');
        if(chevron.classList.contains('fa-chevron-down')) {
            chevron.classList.remove('fa-chevron-down');
            chevron.classList.add('fa-chevron-up');
        } else{
            chevron.classList.remove('fa-chevron-up');
            chevron.classList.add('fa-chevron-down');
        }
    })
});


faBars.addEventListener('click', () => {
    menuUl.classList.toggle('active')
})

submenu.addEventListener('click', () => {
  submenu.classList.toggle('active')
})

submenu.previousElementSibling.addEventListener('click', () => {
    submenu.classList.toggle('active')
})
window.addEventListener("scroll", (event) => {
    const scroll = this.scrollY,
    width = window.innerWidth;
    
    if(width <= 991){
        header.style.background = 'var(--primary)';
        submenu.style.background = 'var(--primary)';
        return
    }

    if(scroll >= 80){
        header.style.background = 'var(--primary)';
        submenu.style.background = 'var(--primary)';
    } else{
        header.style.background = 'none';
        submenu.style.background = 'none';
    }
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      481: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});