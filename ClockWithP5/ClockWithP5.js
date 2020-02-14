function setup() 
{
    createCanvas(400,400);
    angleMode(DEGREES);
}

function draw()
{
    background(0);

    let hr = hour();
    let mn = minute();
    let sc = second();

    fill(255);
    noStroke();
    textSize(32);
    var date = new Date();
    thedate = date.toLocaleTimeString();
    text(thedate,125,200);

    strokeWeight(8);
    noFill();

    stroke(255,100,150);
    let secondAngle = map(sc,0,60,-90,270);
    arc(200,200,300,300,-90,secondAngle);

    stroke(150,100,255);
    let minuteAngle = map(mn,0,60,-90,270);
    arc(200,200,280,280,-90,minuteAngle);

    stroke(150,255,100);
    let hourAngle = map(hr % 12,0,12,-90,270);
    arc(200,200,260,260,-90,hourAngle);
}