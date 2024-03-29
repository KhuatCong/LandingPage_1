if ($('#back-to-top').length) {
    var scrollTrigger = 100, //khoảng cách đến khi bắt đầu hiện nút (px)
        backToTop = function () {
            var scrollTop = $(window).scrollTop(); //lấy khoảng cách scroll hiện tại tính lên Top
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop(); //gọi function 'backToTop()' mỗi khi người dùng cuộn trang
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600); //thời gian kéo lên top tính bằng mili giây 
    });
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.click-img'
    });
    $('.click-img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.img',
        focusOnSelect: true
    });

    $('.list-tin').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    $('.list-phone-goiy').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.list-thoitrang').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
    });

})

// alert('Về "Trang chủ" để sử dụng tất cả chức năng');

// function change(image) {
//     var content = document.getElementById('img');

//     content.src = image.src;
// };

