//player
var playerx = 25;
var playery = 25;

//placeable object
var mousex = 950;
var mousey = 0;

//moving object 1
var enemy1x = 50;
var enemy1y = 50;
var enemy1sx = 1;
var enemy1sy = 1;

//moving object 2
var enemy2x = 100;
var enemy2y = 100;
var enemy2sx = 1;
var enemy2sy = 1;

function setup() {
    createCanvas(1000,600);
    //random speed
    enemy1sx = Math.floor(random(1,7));
    enemy1sy = Math.floor(random(1,7));
    enemy2sx = Math.floor(random(1,7));
    enemy2sy = Math.floor(random(1,7));
}

function draw() {
    background(50);

    //player
    fill(255,200,0);
    circle(playerx,playery,25);

    if(playerx > 900 && playery >500)
    {
        text('You Win', 400, 250)
    }
    else
    {
        text('WASD To Move', 400, 250)
    }

    if(keyIsDown(68))
    {
        playerx+=5;
    }
    else if(keyIsDown(65))
    {
        playerx+=-5;
    }
    if(keyIsDown(83))
    {
        playery+=5;
    }
    else if(keyIsDown(87))
    {
        playery+=-5;
    }

    //placable object
    fill(255,255,255);
    circle(mousex,mousey,50);
    
    //moving object 1
    fill(150,0,255);
    circle(enemy1x,enemy1y,50);
    if(enemy1x > 900)
    {
        enemy1x = 0
        enemy1sx = Math.floor(random(1,7));
    }
    else
    {
        enemy1x+=enemy1sx
    }
    if(enemy1y > 600)
    {
        enemy1y = 0
        enemy1sy = Math.floor(random(1,7));
    }
    else
    {
        enemy1y+=enemy1sy
    }

    //moving object 2
    fill(255,0,0);
    circle(enemy2x,enemy2y,100);
    if(enemy2x > 900)
    {
        enemy2x = 0
        enemy2sx = Math.floor(random(1,7));
    }
    else
    {
        enemy2x+=enemy2sx
    }
    if(enemy2y > 600)
    {
        enemy2y = 0
        enemy2sy = Math.floor(random(1,7));
    }
    else
    {
        enemy2y+=enemy2sy
    }

    textSize(32);
    text('Exit', 925, 550);

    fill(0,0,0)
    rect(900,0,100,500)
}
function mousePressed() {
    mousex=mouseX;
    mousey=mouseY;
}