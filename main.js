Prediction_1 ="";
Prediction_2 ="";


Webcam.set
({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("webcam");
Webcam.attach('#webcam');

function CaptureImage()
{
  Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
});
}
console.log('ml5 Version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded');
}

function Speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first Prediction is"+ Prediction_1;
    speak_data_2 = "The Second prediction is"+ Prediction_2;
    var utterThis = new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
