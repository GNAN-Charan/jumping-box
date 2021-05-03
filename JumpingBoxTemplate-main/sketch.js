var canvas;
var music;
var surface1,surface2,surface3,surface4
var box 
var edges

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,200,40)
    surface1.shapeColor="blue"
    surface2 = createSprite(300,580,200,40)
    surface2.shapeColor="orange"
    surface3 = createSprite(500,580,200,40)
    surface3.shapeColor="red"
    surface4 = createSprite(700,580,200,40)
    surface4.shapeColor="green"
    //create box sprite and give velocity
    box = createSprite(random(20,750),300,40,40)
    box.velocityY = 2
    box.velocityX = random(2,-2)
    box.shapeColor = "white"
    //music.play();
}

function draw() 
{
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
   

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box))
    {
     box.shapeColor = "blue"
     
    }

    if(surface2.isTouching(box))
    {
     box.shapeColor = "orange"
     box.velocityX = 0
     box.velocityY = 0
     music.play();
    }

    if(surface3.isTouching(box))
    {
     box.shapeColor = "red"
    
    }

    if(surface4.isTouching(box))
    {
     box.shapeColor = "green"
     
    }


    drawSprites()

}
