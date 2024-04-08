var randomGen1=Math.floor(Math.random()*6) +1;
var randomGen2=Math.floor(Math.random()*6) +1;


var nameran1="./images copy/dice"+randomGen1+".png"
var nameran2="./images copy/dice"+randomGen2+".png"

document.querySelectorAll("img")[0].setAttribute("src", nameran1);
document.querySelectorAll("img")[1].setAttribute("src", nameran2);
 
if(randomGen1>randomGen2){
    document.querySelectorAll("h1")[1].innerHTML="Player Number 1 Won!";
}
if(randomGen2>randomGen1){
    document.querySelectorAll("h1")[1].innerHTML="Player Number 2 Won!";
}
else if(randomGen1===randomGen2){
    document.querySelectorAll("h1")[1].innerHTML="Draw!";
}
