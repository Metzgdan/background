//  access css properties via JS

//Events : onmouseover, onmousedown, onmouseup, onmouseout

let changeBackground = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "silver";
    box3.style.backgroundColor = "yellow";

    box1.innerText = "I'm a gamer";
    box2.innerText = "And I have a";
    box3.innerText = "big heart";
};


let setOriginal = function () {
    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "red";
    box2.style.backgroundColor = "red";
    box3.style.backgroundColor = "red";

    box1.innerText = "I'm a gamer";
    box2.innerText = "And I have a";
    box3.innerText = "big heart";
};

let showHidden = function(){
    document.getElementById("hidden").innerText = "You've found the secret";
};

let mouseOver = function(id) {

    id.style.backgroundColor = "yellow";
    id.innerText = "HELLO";
};

let mouseOut = function(id){
  id.style.backgroundColor = "red";
  if (id === document.getElementById('block1')){
     id.innerText = "over"

  }else if(id === document.getElementById("block2")){
      id.innerText = "Enter";
  }else
      id.innerText = "down";
};


let addClass = function(id){

    id.classList.add("blueBigBold");



};

let removeClass = function(id){
    id.classList.remove("blueBigBold");
};
let toggleClass = function(id){
    id.classList.toggle("blueBigBold");
};
