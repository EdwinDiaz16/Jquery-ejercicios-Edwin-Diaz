$(document).ready(function() {
    $("input[name=q]").closest("form").addClass('Nuevo');
    $("#myList li").filter(".current").removeClass("current");
    $("#myList li").eq(5).addClass("current");
    $("#slideshow li").eq(0).addClass("current"); 
    $("#slideshow li.current").siblings().addClass("disabled")

    var $form = $('form');

    if($form.hasClass('Nuevo'));
    console.log($form);
    
    var $li = $('#myList li');

    if($li.hasClass("current"));
    console.log($li);

    var $fi = $('#slideshow li');

    if($fi.hasClass("current"));
    console.log($fi);

    var $fa = $('#slideshow li.disabled');

    if($fa.hasClass("disabled"));
    console.log($fa);
  

   


     // un item de una lista desordenada
// que posse la clase 'current'
    

   
    });