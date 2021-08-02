function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    canvas.position(600, 300);
    video= createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OQ78Gj9K6/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw() {
    image(video,0,0,400,300);
    classifier.classify(video,got_result);
}

function got_result(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(2);
    }
}