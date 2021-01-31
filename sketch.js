var canvas;
var music;
var box1,box2,box3,box4


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(200,800,60,10);
    box1.shapeColor="green";
    box2=createSprite(300,800,60,10);
    box2.shapeColor="red";
    box3=createSprite(400,800,60,10);
    box3.shapeColor="pink";
    box4=createSprite(500,800,60,10);
    box4.shapeColor="yellow";


    //create box sprite and give velocity

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
