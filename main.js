img="";
status="";
function preload()
{
img= loadImage('bedroom.jpg');
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();

objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status : Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResults);
  
}

function gotResults(error, results)
{
if(error)
{
    console.log(error);
}

else{

console.log(results);
}

}

function draw()
{
image(img, 0, 0, 600, 500);
fill("#941e49");
text("BED", 70, 60);
noFill();
strokeWeight(2);
stroke("#941e49");
rect(70, 40, 300, 450);

fill("#941e49");
text("Window", 400, 100);
noFill();
stroke("#941e49");
rect(400, 80, 200, 350);
}