$(document).ready(function(){

    //loading page

    $(window).on('load', function(){

        $('.loading').fadeOut(1000, function(){

            $('body').css('overflow', 'auto');

        });
        
    })

    // header height
    $(function(){
        $('.header').height($(window).height());
        
        $(window).resize(function(){

            $('.header').height($(window).height());

        })

    })

    // venobox

    $('.venobox').venobox();

    // nav color

    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $('nav').css({
                'background-color' : '#0e184d',
                'padding' : '7px 0',
                'box-shadow' : '8px 0 5px #000'
            })
        }else{
            $('nav').css({
                'background-color' : 'transparent',
                'padding' : '15px 0',
                'box-shadow' : 'none'
            })
        }
    })

    if($(window).scrollTop() >= 100){
        $('nav').css({
            'background-color' : '#0e184d',
            'padding' : '7px 0',
            'box-shadow' : '8px 0 5px #000'
        })
    }else{
        $('nav').css({
            'background-color' : 'transparent',
            'padding' : '15px 0',
            'box-shadow' : 'none'
        })
    }

    // testimonials button

    $('.testimonials .buttons .btn').on('click', function(e){

        $(this).addClass('active').siblings().removeClass('active');

        e.preventDefault();

        $('#' + $(this).data('click')).siblings().fadeOut(200, function(){

            $('#' + $(this).data('click')).siblings().removeClass('active');
        })

        $('#' + $(this).data('click')).delay(200).fadeIn(200, function(){

            $('#' + $(this).data('click')).addClass('active');

        })

    })

    // smooth scroll

    $('nav li a').on('click', function(){

        $('html, body').animate({

            scrollTop : $( '#' + $(this).data('scroll')).offset().top - 100
        }, 1000)
    });

    // add active to links

    $(window).scroll(function(){

        $('section').each(function(){

            var secID = $(this).attr('id');

            if($(window).scrollTop() + 140 >= $(this).offset().top){

                $('nav li a').removeClass('active');

                $('nav li a[data-scroll = "'+ secID +'"]').addClass('active');
                
            }
        })

        // show button up
        
        if($(window).scrollTop() >= 800){
            $('.up').fadeIn(500);
        }else{
            $('.up').fadeOut(500);
        }

    });

     // click on button up

     $('.up').on('click', function(){
        $('body, html').animate({
            scrollTop : 0 
        }, 1000)
    })
    
    // owl carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // F.A.Q

    $('.faq .content .info i').on('click', function(){

        $(this).parent().parent().find('p').slideToggle(300);

        if($(this).hasClass('fa-plus-circle')){

            $(this).attr('class', 'fas fa-minus-circle');
            $(this).css('color', '#f8234a');
            $(this).parent().find('h4').css('color', '#f8234a');

        }else{

            $(this).attr('class', 'fas fa-plus-circle');
            $(this).css('color', '#000');
            $(this).siblings().css('color', '#000');
        }
    })

    // AOS

    $(function(){

        AOS.init();

        window.addEventListener('load', AOS.refresh)

    })
    

})