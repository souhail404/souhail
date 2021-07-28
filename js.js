$(document).ready(function() {
    $(window).scroll(function () {
        if (this.scrollY > 380){
           $('.about-me ,i').addClass('sticky');
        }else{
            $('.about-me ,i').removeClass('sticky');
        }

    });
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });
     
});

// $(window).scroll(function() {
//        var scrollPos = $(this).scrollTop();
//        $('.particles-js').css({
//            'background-size': 1 + scrollPos + '%'
//        });
// });


     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });
     
});