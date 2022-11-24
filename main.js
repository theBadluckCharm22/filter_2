noseX=0;
noseY=0;
function preload() {
    cat = loadImage('97f22f898b80c3646064976a850c8d6d-sleeping-cat-illustration.png')
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
  

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        headX = results[0].pose.head.x;
        headY = results[0].pose.head.y;
        console.log("head x = " + noseX);
        console.log("head x = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    frill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(wings.webp, headX, headY, 30, 30)
}

function take_snapshot() {
    save('myFilter.png')
}