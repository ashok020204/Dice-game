var randomnum=Math.floor(Math.random()*6)+1;
var random="images/"+"dice"+randomnum+".png";
document.querySelectorAll("img")[0].setAttribute("src",random);

var randomnum2=Math.floor(Math.random()*6)+1;
var random2="images/"+"dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random2);

if(randomnum>randomnum2){
    document.querySelector("h1").innerHTML="player 1 wins";
}

else if(randomnum<randomnum2){
    document.querySelector("h1").innerHTML="palyer 2 wins";
}

else{
    document.querySelector("h1").innerHTML="draw";
}