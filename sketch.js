var form, playerCount
var player

function preload(){

}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30)
    form = new Form();
    player = new Player();
}

function draw(){
    background("green")
    form.display()
}