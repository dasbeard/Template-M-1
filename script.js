$(document).ready(function(){
 
/*======= Show / Hide Navbar ========*/
    $('nav ul li').hover(function(){
        $(this).find('ul>li').stop().slideToggle(400);
    });


/*======= Scroll to About Us ========*/
    $("a[href='#aboutUs']").click(function() {
        $("html, body").animate({scrollTop: $(".aboutUs").offset().top}, 'slow');
      });


/*======= Scroll to Priducts ========*/
$("a[href='#service']").click(function() {
    $("html, body").animate({scrollTop: $(".sampleService").offset().top}, 'slow');
  });


});
    