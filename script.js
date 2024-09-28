function roll(){
    let diceNumber = Math.floor(Math.random()*6)+1;
    let rolledNumber = document.getElementById('Number');
    rolledNumber.innerHTML =  `${diceNumber}`;

    let diceimg =  document.getElementById('image');
if (diceNumber === 1 ){
  diceimg.src = './images/1.svg'
  diceimg.class = "animate__animated animate__rollIn"

  
}

else if (diceNumber === 2 ){
  diceimg.src = './images/2.svg'
  diceimg.class = "animate__animated animate__rollIn"

  
}

else if (diceNumber === 3 ){
    diceimg.src = './images/3.svg'
    diceimg.class = "animate__animated animate__rollIn"

    
  }

  else if (diceNumber === 4 ){
    diceimg.src = './images/4.svg'
    diceimg.class= "animate__animated animate__rollIn"

    
  }

  else if (diceNumber === 5 ){
    diceimg.src = './images/5.svg'
    diceimg.class = "animate__animated animate__rollIn"

    
  }

  else if (diceNumber === 6 ){
    diceimg.src = './images/6.svg'
    diceimg.class = "animate__animated animate__rollIn"

    
  }

}



function restart(){

    document.getElementById('Number').innerHTML="0";
    document.getElementById('image').src = './images/1.png';
}

