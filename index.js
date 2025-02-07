document.addEventListener("DOMContentLoaded", function () {
    const a = document.querySelector(".first_main_picture");
    const obswerver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            a.style.transform = "translateX(0)";
        }
    });
    obswerver.observe(a);
    });
