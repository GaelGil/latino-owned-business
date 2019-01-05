$(window).scroll(function(){
    if($(this).scrollTop()>100) { //cheks if scrollin
        $('.menu').addClass("sticky"); //if scroll "sticky" will be used
    } else{
        $('.menu').removeClass("sticky"); //when not scrolling "sticky" isnt being use
    }
})