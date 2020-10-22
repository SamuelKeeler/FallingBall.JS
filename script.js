var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both= 0;
var counter = 0;

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
    character.style.left + left + 2 - "px";
    }
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    if(right>380){
    character.style.right + right + 2 + "px";
    }
}

document.addEventListener("keydown", event => {
    if (both==0){
        both++;
        if(event.key==="ArrowLeft"){
        Interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
        Interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event =>{
    clearInterval(Interval);
    both=0;
});

setInterval(function(){
    var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class","block");
    hole.setAttribute("class","hole");
    var random=Math.floor(Math.random()* 360);
    hole.style.left=random + "px";

    block.setAttribute("id","block"+counter);
    hole.setAttribute("id","hole"+counter);

    game.appendChild(block);
    game.appendChild(hole);
    counter++;
},1);