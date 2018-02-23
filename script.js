$(document).ready(function(){
 
/*======= Show /Hide Nav Bar ========*/
    $('#navBar ul li').hover(function(){
        $(this).find('ul>li').stop().slideToggle(400);
    });




});
    