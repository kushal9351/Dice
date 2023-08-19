let rand1 = Math.random();
rand1 = rand1 * 6;
rand1 = Math.floor(rand1) + 1;


let rand2 = Math.floor(Math.random()*6)+1;

document.getElementById("img1").setAttribute("src", `/images/dice${rand1}.png`);
document.getElementById("img2").setAttribute("src", `/images/dice${rand2}.png`);

if(rand1 > rand2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(rand2 > rand1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}