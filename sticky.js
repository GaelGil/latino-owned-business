$(window).scroll(function(){
    if($(this).scrollTop()>100) { //cheks if scrollin
        $('.nav-bar').addClass("sticky"); //if scroll "sticky" will be used
    } else{
        $('.nav-bar').removeClass("sticky"); //when not scrolling "sticky" isnt being use
    }
})

// for the nav bar to follow when u scroll