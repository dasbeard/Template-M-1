$(document).ready(function(){
 
/*======= Show / Hide Navbar ========*/
    $('nav ul li').hover(function(){
        $(this).find('ul>li').stop().slideToggle(400);
    });


/*======= Scroll to About Us ========*/
    $("a[href='#bottom']").click(function() {
        $("html, body").animate({scrollTop: $(".aboutUs").offset().top}, 'slow');
      });



    //   $('nav ul li').click(function(){
    //     $(this).find('ul>li').stop().slideToggle(400);
    // });
});
    