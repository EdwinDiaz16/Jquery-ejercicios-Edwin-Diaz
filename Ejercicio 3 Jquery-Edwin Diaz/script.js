$(document).ready(function() {
    
    $("#myList li");
    $('#myList li:odd');
    $("#myList");
    $("#specials");
    $("select[name=day]");
    $("<div>", {
        class: "module",
      });
   


  

    var myItems = []
    $myList = $("#myList");

    for (var i = 0; i<5; i++) {
        myItems.push("<li> " + i + "</li>");
    }
    $myList.append(myItems.join("<br/>"));

    if ($('#myList li').length);
    var $divs = $("#myList li");
    console.log($divs); 

    if ($('#myList li:odd').remove);
    var $odd = $('#myList li:odd');
    console.log($odd);

    var $myElement = $("<h2>Nuevo elemento H2</h2>")
    $myElemen = $("<p>Nuevo elemento P</p>")
$myElement.appendTo("#specials");
$myElemen.appendTo("#specials");

var $newSelect = $("<option>Wednesday</option>");
$newSelect.appendTo("select[name=day]")


var $newDiv= $("<div>", {
        
    class: "module",
    
  });
$newDiv.insertAfter("#specials");



     });


   
   