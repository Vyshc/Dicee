// Left Dice
var randomNumber1= ((Math.floor(Math.random()*6))+1);

if(randomNumber1===1)
{
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(randomNumber1===2)
{
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(randomNumber1===3)
{
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(randomNumber1===4)
{
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(randomNumber1===5)
{
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else 
{
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}



// Right Dice

// better logic for selecting random image b/n 1-6
//I forgot that we concat strings (Major Facepalm)

var randomNumber2= ((Math.floor(Math.random()*6))+1);

//concat strings to give images/dice1.png - images/dice2.png
var randomImageSrc= "images/dice"+ randomNumber2 + ".png"; 

//Selecting img2 by it's class and changing the src to our var randomImageSrc
document.querySelector(".img2").setAttribute("src", randomImageSrc);



// Deciding the winner

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!!!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!!!";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}