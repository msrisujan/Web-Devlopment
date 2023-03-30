$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

$("button").html("<em>Hey</em>");

$("a").attr("href","https://www.yahoo.com");

$("button").click(function() {
    $("h1").css("color","green");
});


$("input").keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});

$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});