
$("button").text("Button Play");
console.log($("img").attr("src","../DrumKit/images/tom4.png"));
$("a").attr("href","https://www.yahoo.com");


// animation to change the color with Jquery onClick
$("h1").click(function(){
$("h1").css("color","Blue");
$("h1").text("Hello World");
});

// to click on button and change it

$("button").click(function(){
    $("h1").css("color","Green");
    $("h1").text("Hello");
});

// change the a html elemnt when press any key and show the keypressed in screen

$("INPUT").keydown(function(event){
    $("h1").text("Hello World");
    $("h1").css("color","Purple");
    $("h1").animate({opacity: 0.5});

});