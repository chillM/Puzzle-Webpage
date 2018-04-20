//global data needed
//data for image toggling
var toggled = {img11 : true};
var primaryImage = {img11 : "squareIcon.jpg"};
var secondaryImage = {img11 : "escher.jpg"};

//data for image rotation
var currentRotation = {img42 : 0};

function toggleImage(id) {
    if(toggled[id]){
        //get from secondary array
        document.getElementById(id).src = secondaryImage[id];
    }
    else{
        //get from primary array
        document.getElementById(id).src = primaryImage[id];
    }

    toggled[id] = !toggled[id];
}


function rotateImage(id) {
    currentRotation[id] += 90;
    if(currentRotation[id] == 360){
        currentRotation[id] = 0;
    }
    document.getElementById(id).style.transform = "rotate(" + currentRotation[id] + "deg)";
}