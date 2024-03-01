function game(){
    location.href="game.html"
}

// Game page script code.....

var randomNumber=Math.floor(Math.random()*100);
console.log(randomNumber);
var chance=10;
function check(){
    chance--;
    document.getElementById("chances").innerHTML="Remaining lives : "+chance;
    var num=(document.getElementById("input"));
    num=Number(num.value);
    if(num>100){
       alert("Please Enter a valid number!");
       
    }
    else if(randomNumber==num){
         location.href="win.html";
    }
    else if(randomNumber>num){
        document.getElementById("value").innerHTML="Your Guess is low";
    }
    else if(randomNumber<num){
        document.getElementById("value").innerHTML="Your Guess is high";
    }
    if(chance==0)
    {
        location.href="lose.html"
    }
}