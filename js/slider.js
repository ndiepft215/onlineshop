const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});
var scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;

    if (scrollTop > (scrollHeight * 0.2)) {
        scrollToTopBtn.classList.remove('hide');
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.classList.add('hide');
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var headerContent = document.querySelector('.header-container');
var header = document.getElementById("header");
var headerHeight = header.clientHeight;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > headerHeight) {
        headerContent.classList.add('sticky'); /* hiển thị header */
        header.style.height = "121px";
    }
    if(window.pageYOffset == 0)
    {
        headerContent.classList.remove('sticky'); /* ẩn header */
    }
});