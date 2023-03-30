
var buttoncolors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern = [];
var started = false;
var level=0;

$(".btn").click(function() {
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


function nextSequence(){

    userClickedPattern=[];

    level++;
    $("#level-title").text("Level " + level);


    var randomnumber= Math.floor(Math.random()*4);
    var randomChosenColor=buttoncolors[randomnumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);    
}

function playSound(name){
    var audio = new Audio("sounds/" +name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100);
}

function checkAnswer(currentlevel){
    if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}