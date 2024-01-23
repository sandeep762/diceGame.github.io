var player1 = Math.random();
player1 = player1 * 6+1;
player1 = Math.floor(player1);

var player2 = Math.random();
player2 = player2 * 6+1;
player2 = Math.floor(player2);

var dicearray = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
console.log(player1);
console.log(player2);

item = dicearray[player1-1];
nsrc = "images/" + item;
document.querySelector(".player1-image").setAttribute("src", nsrc);

if (player1>player2){
    document.querySelector("h1").textContent = "Player 1 wins!!";
    
    document.querySelector(".vis").style.visibility = "visible";
}
    

console.log(nsrc);
item = dicearray[player2-1];
    nsrc = "images/" + item;
    document.querySelector(".player2-image").setAttribute("src", nsrc);


    console.log(nsrc);
if (player1<player2){
    document.querySelector("h1").textContent = "Player 2 wins!!"
    document.querySelector(".vis2").style.visibility = "visible";
    }

if (player1 === player2){
    document.querySelector("h1").textContent = "It was a draw!!!"
    document.querySelector(".vis2").style.visibility = "visible";
    document.querySelector(".vis").style.visibility = "visible";
}