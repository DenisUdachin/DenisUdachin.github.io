$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed:1200,
            autoplay: true,
            autoplaySpeed: 3000,
            // adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png""></img></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></img></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: false,
                        arrows: false,
                        
                    }
                }
            ]
        }
    );

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active')
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active')
        })
    });
    $('.catalog-item__list__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active')
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active')
        })
    });
});
