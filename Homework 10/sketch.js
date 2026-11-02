var head = 95;
var headsize = 3;

//eyes
var leyex = 225;
var leyed = 1;

var reyex = 175;
var reyed = 1;

//left arm
var larmy = 200;
var larmd = 3;

//right arm
var rarmy = 200;
var rarmx = 110;
var rarmd = 3;

//legs
var rlegy = 250;
var rlegd = 3;

//name
var title = 32;
var titles = 1;
var count = 0;

var r = 0;
var g = 0;
var b = 0;

function setup() {
    createCanvas(400,500);
}

function draw() {
    background(100);

    //head
    strokeWeight(5);
    fill(255,255,255);
    circle(200,70,head);
    head+=headsize;
    if(head > 130 || head <60)
        {
            headsize *=-1;
        }

    //body
    fill(0,0,0);
    rect(165,125,70,150);

    fill(255,255,255);
    triangle(165, 120, 200, 200, 235, 120);

    fill(255,200,0);
    triangle(185, 120, 200, 200, 215, 120);

    fill(r,g,b);
    //legs
    rect(165,rlegy,25,150);
    rlegy+=rlegd;
    if(rlegy >= 275)
    {
        rlegd = floor(random(-1,-5));
        r = floor(random(1,256));
        g = floor(random(1,256));
        b = floor(random(1,256));
    }
    if(rlegy <= 180)
    {
        rlegd = floor(random(1,5));
        r = floor(random(1,256));
        g = floor(random(1,256));
        b = floor(random(1,256));
    }

    fill(0,0,0);
    rect(210,250,25,150);

    //hair
    ellipse(200,40,100,40);

    //mouth
    fill(255,0,0);
    ellipse(200,100,20,10);

    //eyes
    fill(255,255,255);
    strokeWeight(15);
    point(reyex, 70);
    reyex+=reyed;
    if(reyex >= 200)
    {
        reyed = floor(random(-1,-5));
    }
    if(reyex <= 160)
    {
        reyed = floor(random(1,5));
    }
    point(leyex, 70);
    leyex+=leyed;
    if(leyex >= 240)
    {
        leyed = floor(random(-1,-5));
    }
    if(leyex <= 200)
    {
        leyed = floor(random(1,5));
    }
    
    //right arm
    line(160, 125, rarmx, rarmy);
    rarmx+=rarmd;
    rarmy+=rarmd;
    if(rarmx >= 160)
    {
        rarmd = floor(random(-1,-5));
    }
    if(rarmx <= 35)
    {
        rarmd = floor(random(1,5));
    }

    //left arm
    line(240, 125, 260, larmy);
    larmy+=larmd;
    if(larmy >= 250)
    {
        larmd = floor(random(-1,-5));
    }
    if(larmy <= 25)
    {
        larmd = floor(random(1,5));
    }

    textSize(32);
    text('Portrait', 15, 35);
    textSize(title);
    text('Sam Nickel', 220, 480);
    title+=titles;
    count+=1;
    if(count > 5)
    {
        titles *= -1;
        count = 0;
    }
}
