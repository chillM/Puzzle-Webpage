//global data needed
//data for image toggling
var toggled = {img11 : false};
var primaryImage = {img11 : "pictures/squareIcon.jpg"};
var secondaryImage = {img11 : "pictures/escher.jpg"};

//data for image rotation
var currentRotation = {img42 : 0};

function toggleImage(id) { 
    if(!toggled[id]){
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


//drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(img42).src = "pictures/openDoor.jpg";
}