
//finding random number 1-6

function random(){

  var randomNumber= Math.random();
  randomNumber=randomNumber*6;
  randomNumber=Math.floor(randomNumber)+1;
  return randomNumber;

}

//placing the random number in the face of dice

function place(n){

  var rNumber=random();  //value of random()
  var face;

  if(rNumber === 1){
    face=document.querySelectorAll(".first-face")[n];
    face.classList.remove("invisible");
  }

  else if(rNumber === 2){
    face=document.querySelectorAll(".second-face")[n];
    face.classList.remove("invisible");
  }

  else if(rNumber === 3){
    face=document.querySelectorAll(".third-face")[n];
    face.classList.remove("invisible");
  }

  else if(rNumber === 4){
    face=document.querySelectorAll(".fourth-face")[n];
    face.classList.remove("invisible");
  }

  else if(rNumber === 5){
    face=document.querySelectorAll(".fifth-face")[n];
    face.classList.remove("invisible");
  }

  else if (rNumber === 6){
    face=document.querySelectorAll(".sixth-face")[n];
    face.classList.remove("invisible");
  }

  return rNumber;

}



die1=place(0);       //calling place() for dice 1
die2=place(1);       //calling place() for dice 2

//player win text

   if(die1 < die2){
     document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
   }

   else if(die1 === die2){
     document.querySelector("h1").innerHTML="Draw!";
   }

   else{
     document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
   }
