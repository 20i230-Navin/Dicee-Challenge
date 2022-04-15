var random1=Math.floor(Math.random()*6)+1;
var dice1="images/dice"+random1+".png";
document.querySelector("img.img1").setAttribute("src",dice1);

var random2=Math.floor(Math.random()*6)+1;
var dice2="images/dice"+random2+".png";
document.querySelector("img.img2").setAttribute("src",dice2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(random1===random2)
{
    document.querySelector("h1").innerHTML="🚩 Draws 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}