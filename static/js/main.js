$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}
$(".split-number").digits();

//ُMain Slider in index page
var showingSlide;

$('.slide:nth-child(1)').css('z-index', 1);
$('.slide:nth-child(1)').css('opacity', 1);
showingSlide = 1;
slideCount = $('.slide').length;

if (slideCount <= 1)
{
    $(".arrow").hide();
}

$('.next').on('click', function () {
    $('.slide:nth-child(' + showingSlide + ')').css('opacity', 0);
    $('.slide:nth-child(' + showingSlide + ')').css('z-index', '-1');
    if (showingSlide == slideCount)
    {
        showingSlide = 1;
    }
    else {
        showingSlide += 1;
    }
    $('.slide:nth-child(' + showingSlide + ')').css('opacity', 1);
    $('.slide:nth-child(' + showingSlide + ')').css('z-index', 1);
})
$('.prev').on('click', function () {
    $('.slide:nth-child(' + showingSlide + ')').css('opacity', 0);
    $('.slide:nth-child(' + showingSlide + ')').css('z-index', '-1');
    if (showingSlide == 1)
    {
        showingSlide = slideCount;
    }
    else {
        showingSlide -= 1;
    }
    $('.slide:nth-child(' + showingSlide + ')').css('opacity', 1);
    $('.slide:nth-child(' + showingSlide + ')').css('z-index', 1);
})

// Slick Sliders
$(document).ready(function(){
    $('.slider-slick').slick({
        'setting-name': 'setting-value',
        autoplay: true,
        autoplayspeed: 3000,

        // prevArrow: '<i class="far fa-angle-right">',
        // nextArrow: '<i class="far fa-angle-left">',

        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

$(document).ready(function(){
    $('.slider-slick-single').slick({
        'setting-name': 'setting-value',
        autoplay: true,
        autoplayspeed: 3000,

        // prevArrow: '<i class="far fa-angle-right">',
        // nextArrow: '<i class="far fa-angle-left">',

        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        // asNavFor: '.slider-slick-gallery',
    });
});

$(document).ready(function(){
    $('.slider-slick-gallery').slick({
        'setting-name': 'setting-value',
        autoplay: true,
        autoplayspeed: 3000,
        asNavFor: '.slider-slick-single',
        focusOnSelect: true,

        // prevArrow: '<i class="far fa-angle-right">',
        // nextArrow: '<i class="far fa-angle-left">',

        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
});

// Sidebar Products
// $(".collapse").hide();

// $(".collapse-link").click(function () {
//         $(this).children('.collpase-link-toggle').children('i').toggleClass('open');
//         $(this).children(".collapse").animate({
//             height: 'toggle'
//         }, 500)
// })
!function ($) {
    
    // Le left-menu sign
    /* for older jquery version
    $('#left ul.nav li.parent > a > span.sign').click(function () {
        $(this).find('i:first').toggleClass("icon-minus");
    }); */
    
    $(document).on("click","#left ul.nav li.parent > a > span.sign", function(){          
        $(this).find('i:first').toggleClass("icon-minus");      
    }); 
    
    // Open Le current menu
    $("#left ul.nav li.parent.active > a > span.sign").find('i:first').addClass("icon-minus");
    $("#left ul.nav li.current").parents('ul.children').addClass("in");

}(window.jQuery);



// Hide Usermenu in Header
$(document).mouseup(function(e) 
{
    var container = $(".user-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});

// Show usermenu in Header
$(".logged-in").click(function () {
    $(".user-menu").toggle();
})

// $('form').on('focus', 'input[type=number]', function (e) {
//     $(this).on('wheel.disableScroll', function (e) {
//       e.preventDefault()
//     })
// })
// $('form').on('blur', 'input[type=number]', function (e) {
//     $(this).off('wheel.disableScroll')
// })

//When Pay Button Clicked "sweetalert2"

//Submit Comment "sweetalert2"
// $(document).on('click' ,".send-comment", function () {
//     Swal.fire({
//         icon: 'success',
//         title: 'ثبت نظر',
//         text: 'نظر شما با موفقیت ثبت گردید',
//       })
// })



// Product Rate in Product Page
productRateFnc = function () {
    var ProductRate;
    
    if ($("#check-1").prop("checked"))
    {
        ProductRate = 1;
    }
    else if ($("#check-2").prop("checked"))
    {
        ProductRate = 2;
    }
    else if ($("#check-3").prop("checked"))
    {
        ProductRate = 3;
    }
    else if ($("#check-4").prop("checked"))
    {
        ProductRate = 4;
    }
    else if ($("#check-5").prop("checked"))
    {
        ProductRate = 5;
    }
    return ProductRate;
}

//Edit information
$("#edit-information").click(function (e) {
    e.preventDefault();
    $(".information-card-content fieldset").prop('disabled', false);
    $(this).hide();
    $("#save-information").show();
    $("#cancel").show()
})

$("#cancel").click(function (e){
    e.preventDefault();
    $(".information-card-content fieldset").prop('disabled', true);
    $(this).hide();
    $("#save-information").hide()
    $("#edit-information").show();
})

$(document).on('click', '.close-message', function () {
    $(this).parents('div.alert-message').fadeOut();
});


$(".product-color-selection-item").click(function () {
    $(".product-color-selection-item").removeClass('active');
    $(this).addClass('active');
})