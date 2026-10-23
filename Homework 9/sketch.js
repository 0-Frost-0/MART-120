function setup() {
    createCanvas(400,500);
}

function draw() {
    background(100);

    strokeWeight(5);
    fill(255,255,255);
    circle(200,70,95);

    fill(0,0,0);
    rect(165,125,70,150);

    rect(165,250,25,150);
    rect(210,250,25,150);

    ellipse(200,40,100,40);

    fill(255,0,0);
    ellipse(200,100,20,10);

    fill(255,255,255);
    triangle(165, 120, 200, 200, 235, 120);

    fill(255,200,0);
    triangle(185, 120, 200, 200, 215, 120);

    fill(255,255,255);
    strokeWeight(15);
    point(175, 70);
    point(225, 70);

    line(160, 125, 140, 250);
    line(240, 125, 260, 250);

    textSize(32);
    text('Portrait', 15, 35);
    text('Sam Nickel', 225, 480);
}
