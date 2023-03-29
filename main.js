function preload(){

}

function setup(){
canvas=createCanvas(400,600);
canvas.center();
video=createCapture(VIDEO);
video.size(400,600);
video.hide();
}

function draw(){
 image(video,0,0,400,600);
}

function take_snapshot(){
    save("Pics.jpg");
}