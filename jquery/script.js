$(function () {
    
    $(".btn1").click(function () {
        $(".img1").toggle();
    });

});

document.addEventListener('DOMContentLoaded', function () {

    const btn2 = document.querySelector('.btn2');
    const img2 = document.querySelector('.img2');

    btn2.addEventListener('click', (e) => {
        img2.classList.remove("img2");
        img2.classList.toggle('hide');
    });

    img2.classList.add("img2");

});

