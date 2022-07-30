function classify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JDgAwiCdp/model.json", modelLoaded)
}
function modelLoaded(){
    console.log("Model loaded.")
    classifier.classify(gotResult)
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        r = Math.floor(Math.random()*255)+1
        b = Math.floor(Math.random()*255)+1
        g = Math.floor(Math.random()*255)+1

        document.getElementById("sound").innerHTML = "I can hear: " + result[0].label
        document.getElementById("accuracy").innerHTML = "Accuracy: " + (result[0].confidence * 100).toFixed(2)
        document.getElementById("sound").style.color = "rgb("+r+", "+g+", "+b+")"
        document.getElementById("accuracy").style.color = "rgb("+r+", "+g+", "+b+")"

        img = document.getElementById("image")
        

        if(result[0].label == "Barking"){
            img.src = "dog.jpeg"
        }
        else if(result[0].label == "Mooing"){
            img.src = "cow.jpeg"
        }
        else if(result[0].label == "Meowing"){
            img.src = "cat.jpeg"
        }
        else{
            img.src = "lion.png"
        }
    }
}